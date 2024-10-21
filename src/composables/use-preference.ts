import type { SupportedLanguageType } from '@/modules/i18n'
import type { BasicColorSchema } from '@vueuse/core'
import type { builtinRadiuses } from 'unocss-preset-shadcn'
import { loadLanguageAsync } from '@/modules/i18n'

export type PageTransitionType = 'fade' | 'fade-slide' | 'fade-up' | 'fade-down'

export const COLOR_SCHEMA_OPTIONS: { icon: string, type: BasicColorSchema }[] = [
  { icon: 'i-radix-icons-sun', type: 'light' },
  { icon: 'i-radix-icons-moon', type: 'dark' },
  { icon: 'i-lucide-sun-moon', type: 'auto' },
]
export const BUILTIN_RADIUS_OPTIONS: typeof builtinRadiuses[number][] = [0, 0.3, 0.5, 0.75, 1]
export const PAGE_TRANSITION_OPTIONS: PageTransitionType[] = ['fade', 'fade-slide', 'fade-up', 'fade-down']

export interface Preference {
  colorSchema: BasicColorSchema
  hue: number
  saturation: number
  lightness: number
  radius: typeof builtinRadiuses[number]
  lang: SupportedLanguageType
  pageTransition: PageTransitionType
}

export const preference = useStorage<Preference>(
  'preference',
  {
    colorSchema: 'auto',
    hue: 260,
    saturation: 80,
    lightness: 50,
    radius: 0.5,
    lang: 'en',
    pageTransition: 'fade',
  },
  localStorage,
  {
    mergeDefaults: (storageValue, defaults) => merge(defaults, storageValue),
  },
)

const { store: storeColorSchema, system: preferredColorSchema } = useColorMode()
export const colorSchema = computed(() => storeColorSchema.value === 'auto' ? preferredColorSchema.value : storeColorSchema.value)
export const isDark = computed(() => colorSchema.value === 'dark')
export const preferredDark = computed(() => preferredColorSchema.value === 'dark')
export const hsl = computed(() => {
  return {
    h: preference.value.hue,
    s: preference.value.saturation,
    l: preference.value.lightness,
  }
})
export const radius = computed(() => preference.value.radius)
export const lang = computed(() => preference.value.lang)

export const designEffects = computed(() => {
  return {
    colorSchema,
    hsl,
    radius,
  }
})

function toggleColorMode() {
  storeColorSchema.value = colorSchema.value === 'light' ? 'dark' : 'light'
  updatePreference({ colorSchema: storeColorSchema.value })
}

// @ts-expect-error: Transition API
const isAppearanceTransition = document.startViewTransition
  && !window.matchMedia('(prefers-reduced-motion: reduce)').matches

/**
 * Credit to [@hooray](https://github.com/hooray)
 * @see https://github.com/vuejs/vitepress/pull/2347
 */
export function toggleDark(event?: MouseEvent) {
  if (!isAppearanceTransition || !event) {
    toggleColorMode()
    return
  }

  const x = event.clientX
  const y = event.clientY
  const endRadius = Math.hypot(
    Math.max(x, innerWidth - x),
    Math.max(y, innerHeight - y),
  )
  const transition = document.startViewTransition(async () => {
    toggleColorMode()
    await nextTick()
  })

  transition.ready.then(() => {
    const clipPath = [
      `circle(0px at ${x}px ${y}px)`,
      `circle(${endRadius}px at ${x}px ${y}px)`,
    ]
    document.documentElement.animate(
      {
        clipPath: isDark.value
          ? [...clipPath].reverse()
          : clipPath,
      },
      {
        duration: 400,
        easing: 'ease-in',
        pseudoElement: isDark.value
          ? '::view-transition-old(root)'
          : '::view-transition-new(root)',
      },
    )
  })
}

export async function updatePreference(updates: Partial<Preference>) {
  if (updates.colorSchema)
    storeColorSchema.value = updates.colorSchema

  if (updates.colorSchema || updates.hue || updates.saturation || updates.lightness) {
    updateColorVars(updates)
  }

  if (updates.lang)
    await loadLanguageAsync(updates.lang)

  if (isNumber(updates.radius))
    document.body.style.setProperty('--radius', `${updates.radius}rem`)

  preference.value = merge(preference.value, updates)
}

const { css } = useStyleTag(``, {
  id: `__shadcn_color_vars__`,
})
export function updateColorVars(updates: Partial<Preference>) {
  const colorVars = genColorVars({
    h: updates.hue ?? preference.value.hue,
    s: (updates.saturation ?? preference.value.saturation) / 100,
    l: (updates.lightness ?? preference.value.lightness) / 100,
  }, isDark.value)

  let cssText = `:root {`
  for (const [key, value] of Object.entries(colorVars)) {
    cssText += `--${key}: ${value};`
  }
  cssText += `}`
  css.value = cssText
}

export async function initPreference() {
  await updatePreference(preference.value)
}

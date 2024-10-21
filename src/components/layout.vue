<template>
  <div size-full>
    <div w-full flex items-center justify-end px-4 py-2>
      <DarkToggle />
      <AppearancePicker />
      <FullscreenToggle />
      <LanguageDropdown />
      <GithubLink />
    </div>

    <div flex-center>
      <slot />
      <ArtPlum />
    </div>
  </div>
</template>

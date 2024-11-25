import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import GithubLink from '../src/components/github-link.vue'

describe('component github-link.vue', () => {
  it('should render', () => {
    const wrapper = mount(GithubLink)
    expect(wrapper.html()).toContain('https://github.com/jinghaihan/starter-vue')
  })
})

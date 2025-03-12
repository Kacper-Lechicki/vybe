import { mount, VueWrapper } from '@vue/test-utils';

import { describe, expect, it } from 'vitest';

import Navbar from '@/components/layout/navbar/navbar.vue';

describe('#navbar', (): void => {
  it('renders header text', (): void => {
    const wrapper: VueWrapper = mount(Navbar);
    expect(wrapper.text()).toContain('header');
  });
});

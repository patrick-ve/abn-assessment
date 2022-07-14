import { describe, expect, test, it } from 'vitest';
import { shallowMount } from '@vue/test-utils';

import Logo from '@/components/NavBar/Logo.vue';

const mountLogo = (args = {}) =>
  shallowMount(Logo, {
    ...args,
  });

describe('Logo.vue', () => {
  test('should render an <img> tag', () => {
    const wrapper = mountLogo();

    expect(wrapper.find('img').exists()).toBeTruthy();
  });

  test('should render a title with text content "AmroFlix"', () => {
    const wrapper = mountLogo();

    expect(wrapper.find('h3').text()).toBe('AmroFlix');
  });

  test('should render an <img/> tag', () => {
    const wrapper = mountLogo();

    wrapper.setProps({ profileImageUrl: 'https://www.abnamro.com/image.jpeg' });

    expect(wrapper.find('img').exists()).toBeTruthy();
  });

  test('should render an image with correct image props', () => {
    const wrapper = mountLogo();

    wrapper.setProps({ profileImageUrl: 'https://www.abnamro.com/image.jpeg' });

    expect(wrapper.find('img').attributes('src')).toBe(
      'https://www.abnamro.com/image.jpeg'
    );
  });
});

import { describe, expect, test } from 'vitest';
import { shallowMount, mount } from '@vue/test-utils';

import Header from '../../components/NavBar/Header.vue';

const mountHeader = (args = {}) =>
  shallowMount(Header, {
    props: {
      profileImageUrl: 'https://www.abnamro.com/image.jpeg',
    },
    stubs: {
      NuxtLink: true,
    },
    ...args,
  });

describe('Header.vue', () => {
  it('sanity test', () => {
    expect(true).toBe(true);
  });

  test('should render an <img> tag', () => {
    const wrapper = mountHeader();

    expect(wrapper.find('img').exists()).toBeTruthy();
  });

  test('should render a title with text content "AmroFlix"', () => {
    const wrapper = mountHeader();

    expect(wrapper.find('h3').text()).toBe('AmroFlix');
  });

  test('should render an <img/> tag', () => {
    const wrapper = mountHeader();

    wrapper.setProps({ profileImageUrl: 'https://www.abnamro.com/image.jpeg' });

    expect(wrapper.find('img').exists()).toBeTruthy();
  });

  test('should render an image with correct image props', () => {
    const wrapper = mountHeader();

    wrapper.setProps({ profileImageUrl: 'https://www.abnamro.com/image.jpeg' });

    expect(wrapper.find('img').attributes('src')).toBe(
      'https://www.abnamro.com/image.jpeg'
    );
  });
});

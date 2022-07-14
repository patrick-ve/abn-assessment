import { describe, expect, test, beforeEach } from 'vitest';
import { shallowMountComponent } from './test-utils';

import Logo from '@/components/NavBar/Logo.vue';

describe('Logo.vue', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMountComponent(Logo);
  });

  test('is a Vue instance', () => {
    expect(wrapper.vm).toBeTruthy();
  });

  test('should render an <img /> tag', () => {
    expect(wrapper.find('img').exists()).toBeTruthy();
  });

  test('should match default snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('should render an image with a src attribute', () => {
    expect(wrapper.find('img').attributes()).toHaveProperty('src');
  });

  test('should render an image with an alt attribute', () => {
    expect(wrapper.find('img').attributes()).toHaveProperty('alt');
  });

  test('should render an image with correct src attribute', () => {
    expect(wrapper.find('img').attributes('src')).toBe(
      '/assets/abnflix_logo.png'
    );
  });

  test('should render an image with correct alt attribute', () => {
    expect(wrapper.find('img').attributes('alt')).toBe('Logo of ABNFLIX');
  });

  test('should render an image with 2 attributes', () => {
    expect(wrapper.find('img').attributes()).toHaveProperty('src');
  });
});

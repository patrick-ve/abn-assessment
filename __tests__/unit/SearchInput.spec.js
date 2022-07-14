import { describe, expect, test, beforeEach } from 'vitest';
import { shallowMountComponent } from './test-utils';

import SearchInput from '@/components/Show/SearchInput.vue';

describe('SearchInput.vue', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMountComponent(SearchInput, {
      global: {
        stubs: {
          IconCross: {
            template: '<span />',
          },
          IconSearch: {
            template: '<span />',
          },
          autoFocus: {
            template: '<span />',
          },
        },
      },
    });
  });

  test('is a Vue instance', () => {
    expect(wrapper.vm).toBeTruthy();
  });

  test('should match default snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('should render an <input /> tag', () => {
    expect(wrapper.find('input[type="search"]').exists()).toBeTruthy();
  });

  test('should accept a value as input', () =>
    expect(wrapper.find('input[type="search"]').element.value).toBe(''));
});

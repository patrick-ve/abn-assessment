import { shallowMount } from '@vue/test-utils';

export const shallowMountComponent = (component, args = {}) =>
  shallowMount(component, {
    ...args,
  });

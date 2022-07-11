import { describe, expect, test } from 'vitest';
import { mount } from '@vue/test-utils';

import Input from '../../components/Input.vue';

describe('Input.vue', () => {
  test('should render an <input> tag', () => {
    const wrapper = mount(Input);

    expect(wrapper.find('input').exists()).toBeTruthy();
  });
});

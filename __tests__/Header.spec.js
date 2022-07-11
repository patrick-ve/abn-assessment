import { describe, it, expect, test } from "vitest";
import { shallowMount } from "@vue/test-utils";

import Header from "../components/Header.vue";

describe("Header.vue", () => {
  test("renders app name when component is created", () => {
    // render the component
    const wrapper = shallowMount(Header, {
      propsData: {
        appName: "AmroFlix",
        profileImageUrl: "https://picsum.photos/200/300",
      },
    });

    // check the name of the component
    expect(wrapper.vm.$options.name).toMatch("Header");

    // check that the title is rendered
    expect(wrapper.text()).toMatch("AmroFlix");
  });
});

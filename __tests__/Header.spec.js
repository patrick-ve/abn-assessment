import { describe, it, expect, test } from "vitest";
import { mount } from "@vue/test-utils";

import Header from "../components/Header.vue";

describe("Header.vue", () => {
  it("should render an h1 tag", () => {
    const wrapper = mount(Header);

    expect(wrapper.find("h1").exists()).toBeTruthy();
  });
});

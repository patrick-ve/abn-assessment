import { describe, expect, test } from "vitest";
import { mount } from "@vue/test-utils";

import Header from "../components/Header.vue";

describe("Header.vue", () => {
  test("should render an <h3> tag", () => {
    const wrapper = mount(Header);

    expect(wrapper.find("h3").exists()).toBeTruthy();
  });

  test('should render a title with text content "AmroFlix"', () => {
    const wrapper = mount(Header);

    expect(wrapper.find("h3").text()).toBe("AmroFlix");
  });

  test("should render an <img/> tag", () => {
    const wrapper = mount(Header);

    expect(wrapper.find("img").exists()).toBeTruthy();
  });

  test("should render an image with correct image props", () => {
    const wrapper = mount(Header, {
      props: { profileImageUrl: "https://www.abnamro.com/image.jpeg" },
    });

    expect(wrapper.find("img").attributes("src")).toBe(
      "https://www.abnamro.com/image.jpeg"
    );
  });
});

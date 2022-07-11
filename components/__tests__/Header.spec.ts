import { render, screen } from "@testing-library/vue";
import { describe, it, expect } from "vitest";
import Header from "../Header.vue";

describe("Header", () => {
  const headerText = "AmroFlix";

  it("render header image correctly", async () => {
    render(Header),
      {
        props: {
          profileImageUrl: "https://picsum.photos/200/300",
        },
      };
  });
});

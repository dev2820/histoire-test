import { describe, it, expect } from "@jest/globals";
import { mount } from "@vue/test-utils";
import { WTag } from "..";
import { Theme } from "../types";

describe("WTag", () => {
  const setup = (props: { text: string; theme: string }) => {
    const wrapper = mount(WTag as any, {
      props,
    });

    return {
      wrapper,
    };
  };
  it("should have text", () => {
    const { wrapper } = setup({ text: "hi", theme: "dark" });
    const text = wrapper.text();
    expect(text).toBe("hi");
  });

  it("should change class by theme", () => {
    const { wrapper } = setup({ text: "hi", theme: "dark" });
    wrapper.setProps({ theme: "light" });
    expect(wrapper.classes()).toContain("light");
  });
});

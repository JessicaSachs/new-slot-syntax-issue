import { shallowMount } from "@vue/test-utils";
import App from "./App.vue";
import Foo from "./Foo.vue";

test("render old syntax slot", () => {
  const wrapper = shallowMount(App);
  expect(wrapper.find(Foo).exists()).toBe(true);
  expect(wrapper.find(".old-example").exists()).toBe(true);
});
test("render new syntax slot", () => {
  const wrapper = shallowMount(App);
  expect(wrapper.find(Foo).exists()).toBe(true);
  expect(wrapper.find(".new-example").exists()).toBe(true);
});

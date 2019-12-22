const VTU = require("@vue/test-utils");
const App = require("./App.vue");
const Foo = require("./Foo.vue");

const shallowMount = VTU.shallowMount;

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

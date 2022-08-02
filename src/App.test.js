import App from "./App";
import React from "react";
import Enzyme from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";

Enzyme.configure({ adapter: new Adapter() });

const setup = () => Enzyme.shallow(<App />);

const findByAttrivute = (wrapper, name) =>
  wrapper.find(`[data-test='${name}']`);

test("renders without errors", () => {
  const wrapper = setup();
  const appComponent = findByAttrivute(wrapper, "component-app");
  expect(appComponent.length).toBe(1);
});

test("renders increment button", () => {
  const wrapper = setup();
  const buttonCounterComponent = findByAttrivute(
    wrapper,
    "component-counter-button"
  );
  expect(buttonCounterComponent.length).toBe(1);
});

test("renders counter display", () => {
  const wrapper = setup();
  const counterDisplayComponent = findByAttrivute(
    wrapper,
    "component-counter-display"
  );
  expect(counterDisplayComponent.length).toBe(1);
});

test("renders counter start a 0", () => {});

test("renders counter increase when you click the button", () => {});

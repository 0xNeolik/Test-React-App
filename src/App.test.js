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
    "component-counter-button-increase"
  );
  expect(buttonCounterComponent.length).toBe(1);
});

test("renders decrease button", () => {
  const wrapper = setup();
  const buttonCounterComponent = findByAttrivute(
    wrapper,
    "component-counter-button-decrease"
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

test("renders counter start a 0", () => {
  const wrapper = setup();
  const counterDisplayComponentText = findByAttrivute(
    wrapper,
    "component-counter-display"
  ).text();
  expect(counterDisplayComponentText).toBe("The count is 0");
});

test("renders counter increase when you click the button", () => {
  const wrapper = setup();
  const buttonCounterComponent = findByAttrivute(
    wrapper,
    "component-counter-button-increase"
  );
  buttonCounterComponent.simulate("click");
  const counterDisplayComponentText = findByAttrivute(
    wrapper,
    "component-counter-display"
  ).text();
  expect(counterDisplayComponentText).toBe("The count is 1");
});

test("renders counter decrease when you click the button", () => {
  const wrapper = setup();
  const buttonCounterComponentIncrease = findByAttrivute(
    wrapper,
    "component-counter-button-increase"
  );
  buttonCounterComponentIncrease.simulate("click");
  const buttonCounterComponentDecrease = findByAttrivute(
    wrapper,
    "component-counter-button-decrease"
  );
  buttonCounterComponentDecrease.simulate("click");
  const counterDisplayComponentText = findByAttrivute(
    wrapper,
    "component-counter-display"
  ).text();
  expect(counterDisplayComponentText).toBe("The count is 0");
});

test("renders counter not decrease if counter is 0", () => {
  const wrapper = setup();
  const buttonCounterComponentDecrease = findByAttrivute(
    wrapper,
    "component-counter-button-decrease"
  );
  buttonCounterComponentDecrease.simulate("click");
  const counterDisplayComponentText = findByAttrivute(
    wrapper,
    "component-counter-display"
  ).text();
  expect(counterDisplayComponentText).toBe("The count is 0");
});

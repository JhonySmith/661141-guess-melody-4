import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import WelcomeScreen from "./welcome-screen.jsx";

Enzyme.configure({
  adapter: new Adapter(),
});

describe(`Welcome screen e2e`, () => {
  it(`Should welcome button be pressed`, () => {
    const welcomeButtonClickHandler = jest.fn();

    const welcomeScreen = shallow(
        <WelcomeScreen
          errorsCount={3}
          welcomeButtonClickHandler={welcomeButtonClickHandler}
        />
    );

    const welcomeButton = welcomeScreen.find(`button.welcome__button`);

    welcomeButton.simulate(`click`);

    expect(welcomeButtonClickHandler.mock.calls.length).toBe(1);
  });
});

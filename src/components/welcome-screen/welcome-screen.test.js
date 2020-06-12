import React from "react";
import renderer from "react-test-renderer";
import WelcomeScreen from "./welcome-screen.jsx";

describe(`Welcome screen unit tests`, () => {
  it(`Render Welcome screen`, () => {
    const tree = renderer
      .create(
          <WelcomeScreen
            errorsCount={3}
            welcomeButtonClickHandler={() => {}}
          />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});

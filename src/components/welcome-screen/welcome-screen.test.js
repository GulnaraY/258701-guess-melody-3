import React from 'react';
import rerender from 'react-test-renderer';
import WelcemeScreen from './welcome-screen.jsx';

const errorsCount = 6;

it(`Should render WelcomeScreen`, () => {
  const tree = rerender
    .create(
        <WelcemeScreen
          errorsCount = {errorsCount}
          onWelcomeButtonClick={() => {}}
        />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});

import React from 'react';
import rerender from 'react-test-renderer';
import App from './app.jsx';

const errorsCount = 6;

it(`render App`, () => {
  const tree = rerender
    .create(
        <App
          errorsCount={errorsCount}
        />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});

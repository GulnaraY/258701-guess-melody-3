import React from 'react';
import rerender from 'react-test-renderer';
import App from './app.jsx';

const errorsCount = 6;

const questions = [
  {
    type: `genre`,
    genre: `rock`,
    answers: [{
      src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
      genre: `rock`,
    }, {
      src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
      genre: `blues`,
    }, {
      src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
      genre: `jazz`,
    }, {
      src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
      genre: `rock`,
    }],
  }, {
    type: `singer`,
    song: {
      singer: `Jim Beam`,
      src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
    },
    answers: [{
      picture: `https://api.adorable.io/avatars/128/1`,
      singer: `John Snow`,
    }, {
      picture: `https://api.adorable.io/avatars/128/2`,
      singer: `Jack Daniels`,
    }, {
      picture: `https://api.adorable.io/avatars/128/3`,
      singer: `Jim Beam`,
    }],
  },
];

it(`render App`, () => {
  const tree = rerender
    .create(
        <App
          errorsCount={errorsCount}
          questions={questions}
        />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});

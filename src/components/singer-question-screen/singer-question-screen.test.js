import React from 'react';
import rerender from 'react-test-renderer';
import SingerQuestionScreen from './singer-question-screen.jsx';

const question = {
  type: `singer`,
  song: {
    singer: `Jim Beam`,
    src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
  },
  answers: [{
    picture: `pic`,
    singer: `John Snow`,
  }, {
    picture: `pic`,
    singer: `Jack Daniels`,
  }, {
    picture: `pic`,
    singer: `Jim Beam`,
  }],
};

it(`Should SingerQuestionScreen be rendered`, () => {
  const tree = rerender.create(
      <SingerQuestionScreen
        onAnswer={()=>{}}
        question={question}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});

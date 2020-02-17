import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SingerQuestionScreen from './singer-question-screen.jsx';

Enzyme.configure({
  adapter: new Adapter(),
});

const mock = {
  question: {
    type: `singer`,
    song: {
      singer: ``,
      src: ``
    },
    answers: [
      {
        singer: `one`,
        picture: `pic-one`,
      },
      {
        singer: `two`,
        picture: `pic-two`,
      },
      {
        singer: `three`,
        picture: `pic-three`,
      },
    ],
  }
};

const mockEvent = {
  preventDefault() {}
};

it(`Click on user answer should pass to the callback data-object which this answer was created`, () => {
  const {question} = mock;
  const onAnswer = jest.fn();
  const userAnswer = {
    singer: `one`,
    picture: `pic-one`
  };

  const screen = shallow(
      <SingerQuestionScreen
        onAnswer={onAnswer}
        question={question}
      />
  );

  const answerInputs = screen.find(`input`);
  const answerOne = answerInputs.at(0);

  answerOne.simulate(`change`, mockEvent);

  expect(onAnswer).toHaveBeenCalledTimes(1);

  expect(onAnswer.mock.calls[0][0]).toMatchObject(question);
  expect(onAnswer.mock.calls[0][1]).toMatchObject(userAnswer);
});

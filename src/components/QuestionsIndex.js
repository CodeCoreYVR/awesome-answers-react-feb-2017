import React from 'react';
import QuestionSummary from './QuestionSummary';
import { getQuestions } from '../utilities/requests';

class QuestionsIndex extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      questions: []
    }
  }

  componentDidMount() {
    getQuestions()
      .then(function (questions) {
        this.setState({
          questions: questions
        });
      }.bind(this));
  }

  _renderQuestions() {
    return this.state.questions.map((question) => {
      // return <QuestionSummary key={question.id} title={question.title} created_at={question.created_at} />
      // SPREAD operator `...question` as shown below, means that all the properties of the question
      // obj will be passed to the QuestionSummary component as props
      return <QuestionSummary onClick={this.props.onQuestionClick} key={question.id} {...question} />
    });
  }

  render() {
    return (
      <div className="QuestionsIndex">
        <h2>Questions</h2>
        { this._renderQuestions() }
      </div>
    );
  }
};

export default QuestionsIndex;

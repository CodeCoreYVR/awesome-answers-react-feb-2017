import React from 'react';
import AnswersList from './AnswersList';
import { getQuestion } from '../utilities/requests';

class QuestionShow extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      question: {}
    }

    this._handleBackClick = this._handleBackClick.bind(this);
  }

  _handleBackClick (event) {
    event.preventDefault();
    if (typeof this.props.onBackClick === 'function') {
      this.props.onBackClick();
    }
  }

  componentDidMount () {
    getQuestion(this.props.id)
      .then((question) => {
        console.log(question);
        this.setState({question: question});
      })
  }

  render () {
    const { question } = this.state;
    return (
      <div className="QuestionShow">
        <a href onClick={this._handleBackClick}>Back</a>
        <h2>{question.title}</h2>
        <p>{question.body}</p>
        <AnswersList answers={ question.answers } />
      </div>
    )
  }
}

export default QuestionShow;

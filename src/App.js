import React, { Component } from 'react';
import QuestionsIndex from './components/QuestionsIndex';
import QuestionShow from './components/QuestionShow';
import QuestionNew from './components/QuestionNew';
import NavBar from './components/NavBar';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      to: 'questionIndex'
    };

    this.goToQuestion = this.goToQuestion.bind(this);
    this.goToQuestionIndex = this.goToQuestionIndex.bind(this);
    this.goToQuestionNew = this.goToQuestionNew.bind(this);
  }

  goToQuestion (id) {
    this.setState({
      to: `questionShow#${id}`
    });
  }

  goToQuestionIndex () {
    this.setState({
      to: `questionIndex`
    })
  }

  goToQuestionNew () {
    this.setState({
      to: `questionNew`
    })
  }

_renderPath () {
    const [path, id] = this.state.to.split('#');
    return ({
      questionShow: (
        <QuestionShow
          onBackClick={this.goToQuestionIndex}
          id={id} />
      ),
      questionIndex: (
        <QuestionsIndex
          onQuestionClick={this.goToQuestion} />
      ),
      questionNew: (
        <QuestionNew
          onBack={this.goToQuestionIndex} />
      )
    })[path];
  }

  render() {
    return (
      <div className="App">
        <h1>Awesome Answers</h1>
        <NavBar links={{
          'New Question': this.goToQuestionNew,
          'Questions': this.goToQuestionIndex
        }} />
        {this._renderPath()}
      </div>
    );
  }
}

export default App;

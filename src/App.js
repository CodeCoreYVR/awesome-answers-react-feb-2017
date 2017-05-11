import React, { Component } from 'react';
import QuestionsIndex from './components/QuestionsIndex';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Awesome Answers</h1>
        <QuestionsIndex />
      </div>
    );
  }
}

export default App;

import React from 'react';

function AnswersList ({answers = []}) {
  return (
    <div className="AnswersList">
      <h3>Answers</h3>
      <ul>
      {
        answers.map(answer => {
          return (
            <li key={answer.id}>
              <p>{answer.body}</p>
            </li>
          )
        })
      }
      </ul>
    </div>
  )
}

export default AnswersList;

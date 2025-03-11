import React from 'react'
import questions from '../data'
import Question from './Question'
const QuestionList = () => {
  return (
    <section className="container">
      <h1 style={{ textAlign: 'center', marginTop: '1.5rem' }}>Questions</h1>
      {questions.map((question) => {
        return <Question key={question.id} {...question} />
      })}
    </section>
  )
}

export default QuestionList

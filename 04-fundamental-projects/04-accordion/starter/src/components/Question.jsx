import React, { useState } from 'react'
import { CgMathPlus } from 'react-icons/cg'
import { CgMathMinus } from 'react-icons/cg'
const Question = ({ title, info }) => {
  const [isShowInfo, setIsShowInfo] = useState(false)

  return (
    <article className="question">
      <div className="title-button">
        <h3>{title}</h3>
        <button
          className="question-btn"
          type="button"
          onClick={() => setIsShowInfo(!isShowInfo)}
        >
          {isShowInfo ? <CgMathMinus /> : <CgMathPlus />}
        </button>
      </div>
      {isShowInfo && <p>{info}</p>}
    </article>
  )
}

export default Question

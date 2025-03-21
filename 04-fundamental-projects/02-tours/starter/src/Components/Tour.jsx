import React, { useState } from 'react'

const Tour = (props) => {
  const { name, info, image, price } = props
  const [readMore, setReadMore] = useState(false)
  console.log(info.substring(0, 10))
  return (
    <article className="single-tour">
      <img src={image} alt={name} className="img" />
      <span className="tour-price">Price: ${price}</span>
      <div className="tour-info">
        <h5>{name}</h5>
        <p>
          {readMore ? info : `${info.substring(0, 200)}...`}
          <button
            type="button"
            className="info-btn"
            onClick={() => setReadMore(!readMore)}
          >
            {readMore ? ' show less' : ' read more'}
          </button>
        </p>
      </div>
    </article>
  )
}

export default Tour

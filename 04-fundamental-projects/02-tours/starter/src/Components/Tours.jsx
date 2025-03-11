import React, { useState } from 'react'
import Tour from './Tour'
const Tours = ({ tours, removeTour }) => {
  return (
    <section>
      <div className="title">
        <h2>Welcome</h2>
        <div className="title-underline"></div>
      </div>
      <div className="tours">
        {tours.map((tour) => {
          return (
            <div key={tour.id}>
              <div className="title-underling"></div>
              <Tour {...tour} />
              <button
                className="btn btn-block delete-btn"
                onClick={() => removeTour(tour.id)}
              >
                remove
              </button>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Tours

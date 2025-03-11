import React from 'react'

const MenuNav = ({ menuCategory, setCategory }) => {
  return (
    <div>
      <nav
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <h2>Our Menu</h2>
        <div className="title-underline"></div>
        <ul style={{ display: 'flex', margin: '1.5rem auto' }}>
          {menuCategory.map((element) => {
            const { id, category } = element
            return (
              <li key={id} style={{ margin: '1rem 0.5rem' }}>
                <button className="btn" onClick={() => setCategory(category)}>
                  {category}
                </button>
              </li>
            )
          })}
        </ul>
      </nav>
    </div>
  )
}

export default MenuNav

import React from 'react'

const MenuContainer = ({ menuItems }) => {
  console.log(menuItems)
  return (
    <div
      className="menu-container"
      style={{
        position: 'relative',
        left: '0',
        top: '0',
        width: '100%',

        display: 'flex',
        flexWrap: 'wrap',
        gap: '1rem',
        justifyContent: 'space-around',
      }}
    >
      {menuItems.map(({ id, img, title, price, desc }) => {
        return (
          <article
            key={id}
            className="menu-item"
            style={{
              position: 'relative',
              flex: '0 0 30%',
              boxSizing: 'border-box',
            }}
          >
            <img
              src={img}
              alt={title}
              style={{
                width: '100%',
                height: '250px',
                objectFit: 'cover',
                borderTopRightRadius: 'var(--borderRadius)',
                borderTopLeftRadius: 'var(--borderRadius)',
              }}
            />
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '1rem 0',
              }}
            >
              <h4>{title}</h4>
              <span
                style={{
                  background: 'var(--primary-500)',
                  borderRadius: '0.25rem',
                  color: 'white',
                  padding: '0.25rem',
                  boxSizing: 'border-box',
                }}
              >
                ${price}
              </span>
            </div>
            <p>{desc}</p>
          </article>
        )
      })}
    </div>
  )
}

export default MenuContainer

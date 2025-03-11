import React from 'react'
import avatar from '../../../assets/default-avatar.svg'
export function Person({ name, nickName, images }) {
  const img = images && images[0] && images[0].small && images[0].small.url
  const img2 = images?.[0]?.small?.url || avatar
  return (
    <div
      style={{
        display: 'flex',
        width: '50vw',
        justifyContent: 'space-between',
      }}
    >
      <h4>{name}</h4>
      <p>NickName: {nickName || 'NoNickName'}</p>
      <img src={img2} style={{ width: '50px' }} />
    </div>
  )
}
export default Person

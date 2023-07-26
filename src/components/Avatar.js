import React from 'react'
import avatar from '../assets/placeholder.jpg'

const Avatar = ({src}) => {
  return (
    <img alt='avatar'  className='rounded-full' height='30' width='30' src={src || avatar} />
  )
}

export default Avatar
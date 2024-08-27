import React from 'react'

export const CoreSkill = ({ image, title, description }) => {
  return (
    <li className="h-48 rounded-lg py-2 content-center shadow-md shadow-[#040c16] hover:scale-110 duration-500 z-10">
      <img src={image} alt={title} className='w-25 mx-auto' />
      <br />
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  )
}

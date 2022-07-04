import React from 'react'

const Button = ({buttonClass, name}) => {
  return (
    <button className={buttonClass} >{name}</button>
  )
}

export default Button
import React from 'react'
// import {BiMessageDetail} from 'react-icons/bi'

const Button = (props) => {
  return (
    <>
     <button className='btn'>
        {props.icons}
        {props.text}
     </button>
    </>
  )
}

export default Button
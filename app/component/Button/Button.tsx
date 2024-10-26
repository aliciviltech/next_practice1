import React from 'react'
import './Button.css'

interface PropType {
    text1:string, 
    text2?:string,
    bgColor?:string,
}
// const props = {text1: 'click', text2:'here'}
const Button = ({text1, text2, bgColor='bg-red-400'}:PropType) => {
    // const {text1, text2} = props;
  return (
    <button className={`${bgColor} py-2 px-5 m-10`}>{text1} {text2}</button>
  )
}

export default Button
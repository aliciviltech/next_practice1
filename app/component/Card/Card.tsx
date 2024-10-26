import React from 'react'



const Card = ({suit}:{suit:any}) => {
  return (
    <div className="cardContainer w-[300px]">
        <div className="image">
            <img className='w-[300px]' src={suit.image} alt="" />
        </div>
        <div className="description">
            <div>{suit.title}</div>
            <p>Price: {suit.price}</p>
        </div>
    </div>
  )
}

export default Card
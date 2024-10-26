import React from 'react'
interface suitInterface {
  category: string,
  title: string,
  price: number,
  material: string,
  discount: number | null,
  instock: boolean,
  image: string
}


const Card = ({ suit }: { suit: suitInterface }) => {
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
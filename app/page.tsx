import React from 'react'
import { Button } from '@/components/ui/button'
// import Button from './component/Button/Button'
import Card from './component/Card/Card'
import { menSuit } from './utils/ProductData'

const Home = () => {
  console.log(menSuit[0])
  return (
    <div>
      <h1>Home</h1>
      {/* <Button text1='click' text2='here' bgColor='greenBg'/>
      <Button text1='About' />
      <Button text1='Sign' text2='up' bgColor='lightBlueBg'/>
      <Button text1='Log' text2='out'/> */}
      <Button>Click me</Button>
      <div className="cardContainer flex gap-10 flex-wrap">
        {
          menSuit.map((suit)=>{
            return (
              <Card suit={suit} />
            )
          })
        }
      </div>


    </div>
  )
}

export default Home

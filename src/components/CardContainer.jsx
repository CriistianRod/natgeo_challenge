import React from 'react'
import Card from './Card'
import '../styles/components/CardContainer.css'

const CardContainer = () => {
    let cardContainer =
    <div className='cardContainer'>
        <Card />
        <Card />
        <Card />
    </div>
  return cardContainer
}

export default CardContainer
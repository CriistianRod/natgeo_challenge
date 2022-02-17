import React from 'react';
import GeneralHeading from './GeneralHeading';
import CardContainer from './CardContainer';
import '../styles/components/Hero.css';
import PicksContainer from './PicksContainer';

function Hero() {
  let hero = (
    <div className="hero">
      <GeneralHeading />
      <CardContainer />
      <PicksContainer />
    </div>
  );
  return hero;
}

export default Hero;

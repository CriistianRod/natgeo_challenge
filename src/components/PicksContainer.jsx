import React from 'react';
import Pick from './Pick';
import '../styles/components/PicksContainer.css'

const PicksContainer = () => {
  let picksContainer =
  <div className='picksContainer'>
      <div className='picksContainer__title'>Today's Picks</div>
      <Pick />
      <Pick />
      <Pick />
      <Pick />
      <Pick />
  </div>;
  return picksContainer;
};

export default PicksContainer;

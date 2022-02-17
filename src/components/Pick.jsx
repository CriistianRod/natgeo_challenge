import React from 'react';
import '../styles/components/Pick.css'

const Pick = () => {
  let pick = (
    <div className='pick'>
      <img
        src="https://i.natgeofe.com/n/38e63d8d-f138-4f51-b7a4-f5453e40c5db/RSCatfish1_square.jpg?w=536.25&h=536.25"
        alt="Pick's"
        className='pick__image'
      />
      <div className='pick__info'>
          <h3 className='pick__title'>History magazine</h3>
          <p className='pick__detail'>Egypt's first pharaohs loved catfish—and worshipped them</p>
      </div>
    </div>
  );

  return pick;
};

export default Pick;

import React from 'react';
import readIcon from '../images/alignment.png'
import '../styles/components/Card.css'

const Card = () => {
  let card = (
    <div className="card">
      <article className="card__tyle">
        <a
          className="card__link"
          href="https://podcasts.apple.com/us/podcast/into-the-depths/id1604457921"
        >
          <span className="card__span--hidden">
            Into the Depths: A 6-part series featuring Nat Geo Explorer Tara
            Roberts
          </span>
        </a>
        <header className="card__header">
          <div className="card__backgroundImage"></div>
        </header>
        <footer className='card__footer'>
            <div className='card__title'>Into the Depths: A 6-part series featuring Nat Geo Explorer Tara Roberts</div>
            <div className='card__buttonArea'>
                <button className='card__button'>
                    <img src={readIcon} alt="Read button" /> Read
                </button>
            </div>
        </footer>
      </article>
    </div>
  );

  return card;
};

export default Card;

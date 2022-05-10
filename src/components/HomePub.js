import React from 'react';
import logo from '../images/pixel-cocktails.png';

const HomePub = () => {
  return (
    <>
      <section className='reg'>
        <div className='logo-bubble'>
          <div className=' nes-balloon from-right '>
            <h1>Drinks On Me!</h1>
          </div>
        </div>
        <div className='user-balance'>
          <p className='label'>username</p>
          <p className='label'>balance</p>
        </div>
        <figure>
          <img src={logo} />
        </figure>
        <div className='landing'>
          <div className='nes-btn big-butt is-primary'>
            <a href='#'>Transfer</a>
          </div>
          <div className='nes-btn big-butt is-warning'>
            <a href='#'>Transactions</a>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePub;

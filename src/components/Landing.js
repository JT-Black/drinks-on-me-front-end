import React from 'react';
// import coin from '../sounds/mario-coin.mp3';
import logo from '../images/pixel-cocktails.png';
import { Link } from 'react-router-dom';
// import useSound from 'use-sound';

const Landing = () => {
  // const play = useSound(coin);
  return (
    <>
      <section className='reg'>
        <div className='logo-bubble'>
          <div className=' nes-balloon from-right '>
            <h1>Drinks On Me!</h1>
          </div>
        </div>
        <figure>
          <img src={logo} />
        </figure>
        <div className='landing'>
          <Link className='nes-btn big-butt is-primary' to='/login'>
            Login
          </Link>

          <Link className='nes-btn big-butt is-primary' to='/register'>
            Register
          </Link>
        </div>
      </section>
    </>
  );
};

export default Landing;

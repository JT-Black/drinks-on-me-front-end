import React, { useEffect, useState } from 'react';
import logo from '../images/pixel-cocktails.png';
import { Link } from 'react-router-dom';
import { getUserId } from '../api/session';
import { purchase, getUserById } from '../api/helpers';
// import coin from '../sounds/mario-coin.mp3';
// import useSound from 'use-sound';

const Purchase = () => {
  // const [play] = useSound(coin);

  const [userId, setUserId] = React.useState('');
  const [pubId, setPubId] = React.useState('');
  const [drinkId, setDrinkId] = React.useState([]);

  // React.useEffect(() => {

  //   const makePurchase = async () => {
  //     try {
  //       const purchase = await purchase();
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };
  //   makePurchase();
  // }, []);

  const [currentUser, setCurrentUser] = useState({});

  // get user object.

  useEffect(() => {
    const getUser = async () => {
      const userId = getUserId();
      console.log(userId);
      const res = await getUserById(userId);
      console.log(res);
      setCurrentUser(res);
    };
    getUser();
  }, []);

  return (
    <section className='reg'>
      <div className='logo-bubble'>
        <div className=' nes-balloon from-left '>
          <h1>Purchase</h1>
        </div>
      </div>
      <div className='user-balance'>
        <p>{currentUser?.username}</p>
        <p>£{currentUser?.balance}</p>
      </div>
      <figure>
        <img src={logo} />
      </figure>

      <div className='nes-container is-rounded is-centered'>
        <form className=' ' /* onSubmit={handleSubmit} */>
          <label for='default_select' class='label'>
            Select Pub
          </label>
          <div class='nes-select'>
            <select required id='default_select'>
              <option value='' disabled selected hidden>
                Select...
              </option>
              <option value='pub1'>Queen's Head</option>
            </select>
          </div>
          <label for='default_select' class='label'>
            Select Drink
          </label>
          <div class='nes-select'>
            <select required id='default_select'>
              <option value='' disabled selected hidden>
                Select...
              </option>
              <option value='drink1'>Pint</option>
            </select>
          </div>
          <div>
            <button
              // onClick={play}
              type='submit'
              value='Login'
              className='nes-btn big-butt is-primary'
            >
              Buy Drink!
            </button>
          </div>
          <div>
            <Link to='/homeuser' className='nes-btn big-butt is-primary'>
              Home
            </Link>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Purchase;

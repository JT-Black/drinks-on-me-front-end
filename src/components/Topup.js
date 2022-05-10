import React, { useEffect, useState } from 'react';
import logo from '../images/pixel-cocktails.png';
import { Link } from 'react-router-dom';
import { topup, getUserById } from '../api/helpers';
import { getUserId } from '../api/session';

// import coin from '../sounds/mario-coin.mp3';
// import useSound from 'use-sound';

const Topup = () => {
  // const [play] = useSound(coin);
  const [amount, setAmount] = useState(0);
  const [currentUser, setCurrentUser] = useState({});

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

  const handleTopupChange = (e) => {
    setAmount(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await topup({ topup_amount: Number(amount) });
  };
  console.log(amount);

  return (
    <section className='reg'>
      <div className='logo-bubble'>
        <div className=' nes-balloon from-left '>
          <h1>Topup</h1>
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
        <form className=' ' onSubmit={handleSubmit}>
          <div className='field'>
            <label htmlFor='topup' className='label'>
              Topup Amount
            </label>
            <div className='control'>
              <input
                type='text'
                className='nes-input'
                id='topup'
                value={amount}
                onChange={handleTopupChange}
              />
            </div>
          </div>
          <div>
            <button
              // onClick={}
              type='submit'
              value='login'
              className='nes-btn is-primary big-butt'
            >
              Top Me Up!
            </button>
          </div>
          <div>
            <Link to='/homeuser' className='nes-btn is-primary big-butt'>
              Home
            </Link>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Topup;

import React, { useEffect, useState } from 'react';
import logo from '../images/pixel-cocktails.png';
import { Link } from 'react-router-dom';
import { getUserId } from '../api/session';
import { getUserById } from '../api/helpers';

const HomeUser = () => {
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
    <>
      <section className='reg'>
        <div className='logo-bubble'>
          <div className=' nes-balloon from-right '>
            <h1>Drinks On Me!</h1>
          </div>
        </div>
        <div className='user-balance'>
          <p>{currentUser?.username}</p>
          <p>£{currentUser?.balance}</p>
        </div>
        <figure>
          <img src={logo} />
        </figure>
        <div className='landing'>
          <div>
            <Link to='/transfer' className='nes-btn big-butt is-success'>
              Transfer
            </Link>
          </div>
          <div>
            <Link to='/purchase' className='nes-btn big-butt is-warning'>
              Purchase
            </Link>
          </div>
          <div>
            <Link to='/transactions' className='nes-btn big-butt is-primary'>
              Transactions
            </Link>
          </div>
          <div>
            <Link to='/topup' className='nes-btn big-butt is-error'>
              Topup
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeUser;

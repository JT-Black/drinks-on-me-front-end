import React, { useEffect, useState } from 'react';
import logo from '../images/pixel-cocktails.png';
import { Link } from 'react-router-dom';
import { getUserId } from '../api/session';
import { getUsers, transfer, getUserById } from '../api/helpers';
// import coin from '../sounds/mario-coin.mp3';
// import useSound from 'use-sound';

const Transfer = () => {
  // const [play] = useSound(coin);
  const [currentUser, setCurrentUser] = useState({});

  React.useEffect(() => {
    const getUser = async () => {
      const userId = getUserId();
      console.log(userId);
      const res = await getUserById(userId);
      console.log(res);
      setCurrentUser(res);
    };
    getUser();
  }, []);

  const [transferMsg, setTransferMsg] = React.useState('');
  const [transferValue, setTransferValue] = React.useState('');
  const [receiverId, setReceiverId] = React.useState(1);
  const [users, setUsers] = React.useState([]);

  React.useEffect(() => {
    const getAllUsers = async () => {
      try {
        const users = await getUsers();
        setUsers(users);
      } catch (error) {
        console.error(error);
      }
    };
    getAllUsers();
  }, []);

  

  const handleMsgChange = (e) => {
    setTransferMsg(e.target.value);
  };

  const handleTransferChange = (e) => {
    setTransferValue(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await transfer({
        receiver_id: receiverId,
        amount: transferValue,
        message: transferMsg
      });
      // navigate('/homeuser');
    } catch (error) {
      console.error(error);
    }
  };

  const handleReceiverChange = (e) => {
    e.preventDefault();
    setReceiverId(e.target.value);
  };
  console.log(receiverId);

  return (
    <section className='reg'>
      <div className='logo-bubble'>
        <div className=' nes-balloon from-left '>
          <h1>Transfer</h1>
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
        <form onSubmit={handleSubmit}>
          <label htmlFor='default_select' className='label'>
            Select User
          </label>
          <div className='nes-select'>
            <select
              onChange={handleReceiverChange}
              required
              id='default_select'
            >
              {users.map((user) => (
                <option key={user.id} value={user.id}>
                  {user.username}
                </option>
              ))}
            </select>
          </div>
          <div className='field'>
            <label htmlFor='transfer' className='label'>
              Transfer Amount
            </label>
            <div className='control'>
              <input
                type='text'
                className='nes-input'
                id='transfer'
                value={transferValue}
                onChange={handleTransferChange}
              />
            </div>
          </div>
          <div className='field'>
            <label htmlFor='message' className='label'>
              Message
            </label>
            <div className='control'>
              <input
                type='text-area'
                className='nes-input'
                id='message'
                value={transferMsg}
                onChange={handleMsgChange}
              />
            </div>
          </div>
          <div>
            <button
              // onClick={play}
              type='submit'
              value='Login'
              className='nes-btn big-butt is-primary'
            >
              Transfer!
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

export default Transfer;

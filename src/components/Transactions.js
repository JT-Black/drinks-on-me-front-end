import React from 'react';
import { Link } from 'react-router-dom';

const Transactions = () => {
  return (
    <section className='reg'>
      <div className='logo-bubble'>
        <div className=' nes-balloon from-left '>
          <h1>Transactions</h1>
        </div>
      </div>
      <div className='user-balance'>
        <p className='label'>username</p>
        <p className='label'>balance</p>
      </div>

      <div className='nes-container is-rounded is-centered'>
        <form>
          <label for='default_select' class='label'>
            Select History
          </label>
          <div class='nes-select'>
            <select required id='default_select'>
              <option value='' disabled selected hidden>
                Select...
              </option>
              <option value='purchases'>Purchases</option>
              <option value='transfers'>Transfers</option>
            </select>
          </div>

          <Link to='/homeuser' className='nes-btn big-butt is-primary'>
            Home
          </Link>
        </form>
      </div>
    </section>
  );
};

export default Transactions;

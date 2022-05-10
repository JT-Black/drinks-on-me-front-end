import React from 'react';

import { registerUser } from '../api/auth';
import { useNavigate } from 'react-router-dom';

function Register() {
  const navigate = useNavigate();

  const [user, setUser] = React.useState({
    username: '',
    email: '',
    password: '',
    password_confirmation: ''
  });

  function handleChange(event) {
    setUser({ ...user, [event.target.name]: event.target.value });
  }

  function handleSubmit(event) {
    event.preventDefault();

    const getData = async () => {
      try {
        await registerUser(user);
        navigate('/login');
      } catch (err) {
        console.error(err);
      }
    };
    getData();
  }

  return (
    <section className='reg'>
      <div className='logo-bubble'>
        <div className=' nes-balloon from-left '>
          <h1>Register</h1>
        </div>
      </div>
      <div className='spacer'></div>
      <div className='reg-container nes-container is-rounded is-centered'>
        <form className='' onSubmit={handleSubmit}>
          <div className='field'>
            <label className='label'>Username</label>
            <div className='control'>
              <input
                className='nes-input'
                name='username'
                onChange={handleChange}
                value={user.username}
              />
            </div>
          </div>
          <div className='field'>
            <label className='label'>Email</label>
            <div className='control'>
              <input
                className='nes-input'
                name='email'
                onChange={handleChange}
                value={user.email}
              />
            </div>
          </div>
          <div className='field'>
            <label className='label'>Password</label>
            <div className='control'>
              <input
                type='password'
                className='nes-input'
                name='password'
                onChange={handleChange}
                value={user.password}
              />
            </div>
          </div>
          <div className='field'>
            <label className='label'>Password Confirmation</label>
            <div className='control'>
              <input
                type='password'
                className='nes-input'
                name='password_confirmation'
                onChange={handleChange}
                value={user.password_confirmation}
              />
            </div>
          </div>
          <div className='field'>
            <button type='submit' className='nes-btn is-fullwidth is-warning'>
              Register Me!
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Register;

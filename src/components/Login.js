import React from 'react';
// eslint-disable-next-line camelcase
import jwt_decode from 'jwt-decode';
import logo from '../images/pixel-cocktails.png';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../api/auth';
import { setUserId } from '../api/session';

// below to send to session storage.
const sendId = (id) => {
  setUserId(id);
};

const Login = () => {
  const navigate = useNavigate();
  const [emailValue, setEmailValue] = React.useState('');
  const [passwordValue, setPasswordValue] = React.useState('');

  const handleEmailChange = (e) => {
    setEmailValue(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPasswordValue(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await loginUser({
        email: emailValue,
        password: passwordValue
      });
      const { token } = res;
      const { sub } = jwt_decode(token);

      console.log({ sub });

      sendId(sub);
      navigate('/homeuser');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <section className='reg'>
      <div className='logo-bubble'>
        <div className=' nes-balloon from-left '>
          <h1>Log In</h1>
        </div>
      </div>
      <div className=''>
        <figure>
          <img src={logo} />
        </figure>
        <div className='nes-container is-rounded is-centered'>
          <form className=' ' onSubmit={handleSubmit}>
            <div className='field'>
              <label htmlFor='email' className='label'>
                Email
              </label>
              <div className='control'>
                <input
                  type='text'
                  className='nes-input'
                  id='email'
                  value={emailValue}
                  onChange={handleEmailChange}
                />
              </div>
            </div>
            <div className='field'>
              <label htmlFor='password' className='label'>
                Password
              </label>
              <div className='control'>
                <input
                  type='password'
                  className='nes-input'
                  id='password'
                  value={passwordValue}
                  onChange={handlePasswordChange}
                />
              </div>
            </div>

            <button
              type='submit'
              value='Login'
              className='nes-btn is-fullwidth is-primary'
            >
              Log me in!
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Login;

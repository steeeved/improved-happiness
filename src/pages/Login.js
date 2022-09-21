import { useNavigate } from 'react-router-dom';

import { useApp } from '../context/userContext';
import Styles from './Login.module.scss';

export const Login = () => {
  const { firstName, lastName, email, setUser, setLoggedIn } = useApp();
  const navigate = useNavigate();

  setLoggedIn(false);

  function handleChange(e) {
    setUser((prevFormData) => {
      return {
        ...prevFormData,
        [e.target.name]: e.target.value
      };
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!firstName && !lastName && !email) {
      return;
    }
    navigate('/dashboard');
    setLoggedIn(true);
  }

  return (
    <div className={Styles.main}>
      <h2>Tell us about yourself</h2>
      <form>
        <input
          type='text'
          placeholder='First Name'
          name='firstName'
          onChange={handleChange}
        />
        <input
          type='text'
          placeholder='Last Name'
          name='lastName'
          onChange={handleChange}
        />
        <input
          type='email'
          placeholder='Email'
          name='email'
          onChange={handleChange}
        />
        <button onClick={handleSubmit}>Proceed</button>
      </form>
    </div>
  );
};

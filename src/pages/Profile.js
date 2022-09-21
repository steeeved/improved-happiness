import { useRef } from 'react';
import { Link } from 'react-router-dom';

import { useApp } from '../context/userContext';
import Styles from './profile.module.scss';

export const Profile = () => {
  const { firstName, lastName, email, setUser } = useApp();
  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const emailRef = useRef();
  let myRefs = [firstNameRef, lastNameRef, emailRef];

  const handleEdit = () => {
    myRefs.forEach((ref) => {
      ref.current.removeAttribute('readonly');
    });
  };

  const handleSave = () => {
    myRefs.forEach((ref) => {
      ref.current.setAttribute('readonly', true);
    });
  };

  const handleChange = (e) => {
    setUser((prevFormData) => {
      return {
        ...prevFormData,
        [e.target.name]: e.target.value
      };
    });
  };

  return (
    <div className={Styles.main}>
      <h1>Welcome to your profile {firstName}</h1>
      <div className={Styles.form}>
        <form>
          <div className={Styles.info}>
            <label htmlFor='firstName'>First Name:</label>
            <input
              type='text'
              placeholder='First Name'
              defaultValue={firstName}
              name='firstName'
              ref={firstNameRef}
              onChange={handleChange}
              readOnly
            />
          </div>
          <div className={Styles.info}>
            <label htmlFor='lastName'>Last Name:</label>
            <input
              type='text'
              placeholder='Last Name'
              defaultValue={lastName}
              name='lastName'
              ref={lastNameRef}
              onChange={handleChange}
              readOnly
            />
          </div>
          <div className={Styles.info}>
            <label htmlFor='email'>Email:</label>
            <input
              type='email'
              placeholder='Email'
              defaultValue={email}
              name='email'
              ref={emailRef}
              onChange={handleChange}
              readOnly
            />
          </div>
        </form>
        <div className={Styles.btns}>
          <button onClick={handleEdit} type='button'>
            Edit Profile
          </button>
          <button onClick={handleSave} type='button'>
            Save Profile
          </button>
          <button type='button'>
            <Link to='/dashboard' className={Styles.Link}>Go Back</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

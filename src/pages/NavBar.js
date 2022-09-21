import { useApp } from '../context/userContext';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

import Styles from './NavBar.module.scss';
import profileIcon from '../assets/profile.png';
import logOutIcon from '../assets/Logout.png';
import goBack from '../assets/goBack.png';

export const NavBar = () => {
  const [titleVisibility, setTitleVisibility] = useState('visible');
  const [iconsVisibility, setIconsVisibility] = useState('hidden');
  const { loggedIn, setLoggedIn } = useApp();
  const navigate = useNavigate();


  useEffect(() => {
    if (loggedIn) {
      setTitleVisibility('none');
      setIconsVisibility('flex');
    } else {
      setTitleVisibility('block');
      setIconsVisibility('none');
    }
  }, [loggedIn]);

  const handleGoBack = () => {
    navigate(-1);
  };

  const handleProfileClick = () => {
    navigate('/profile');
    };
    
    const handleLogOut = () => {
        setLoggedIn(false);
        navigate('/');
    };

  return (
    <nav>
      <h3 className={Styles.title} style={{ display: titleVisibility }}>
        Simple Meme App
      </h3>
      <div className={Styles.activated} style={{ display: iconsVisibility }}>
        <img
          src={goBack}
          title='Go Back'
          alt='Go Back'
          onClick={handleGoBack}
        />
        <img
          src={profileIcon}
          title='Visit Your Profile'
          alt='Visit Profile'
          onClick={handleProfileClick}
        />
        <img
          src={logOutIcon}
          title='Logout'
          alt='Logout'
          onClick={handleLogOut}
        />
      </div>
    </nav>
  );
};

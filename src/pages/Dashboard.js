import { useNavigate } from 'react-router-dom';

import { useApp } from '../context/userContext';
import Styles from './Dashboard.module.scss';

export const Dashboard = () => {
  console.log('Dashboard page rendered');
  const user = useApp();
  const navigate = useNavigate();

  const visitProfile = () => {
    navigate('/profile');
  };

  const visitMemePage = () => {
    navigate('/memes');
  };

  return (
    <div className={Styles.main}>
      <h1>
        Welcome <span>{user.lastName}</span>
      </h1>
      <div className={Styles.buttons}>
        <button onClick={visitProfile}>See your profile</button>
        <button onClick={visitMemePage}>See some memes</button>
      </div>
    </div>
  );
};

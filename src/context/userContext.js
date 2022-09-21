import { useState, useContext, createContext } from 'react';

const Context = createContext();
export const useApp = () => useContext(Context);

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({
    firstName: '',
    lastName: '',
    email: ''
  });
  const [loggedIn, setLoggedIn] = useState(false);

  const { firstName, lastName, email } = user;

  return (
    <Context.Provider
      value={{ firstName, lastName, email, setUser, loggedIn, setLoggedIn }}
    >
      {children}
    </Context.Provider>
  );
};

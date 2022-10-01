import { collection } from 'firebase/firestore';
import { useEffect, useState, createContext } from 'react';
import { PropTypes } from 'prop-types';
import { onAuthStateChanged } from '@firebase/auth';

import { auth } from '../api/firebase';
import { db } from '../api/firebase';
export const usersData = collection(db, 'Users');
export const needHelpPostsData = collection(db, 'Posts-need-help');
export const offerHelpPostsData = collection(db, 'Posts-offer-help');

export const UserContext = createContext();
export const ThemeProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuth, setIsAuth] = useState(null);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      console.log('auth status changed', user);
      if (user) {
        setIsAuth(true);
        setUser(user);
      } else {
        setIsAuth(false);
        setUser(null);
      }
    });
  }, []);

  if (isAuth === null) {
    return <h1>Trwa ładowanie aplikacji...</h1>;
  }

  return (
    <>
      <UserContext.Provider value={{ user }}>{children}</UserContext.Provider>
    </>
  );
};

ThemeProvider.propTypes = {
  children: PropTypes.any,
};

/* eslint-disable react/react-in-jsx-scope */
import { collection, onSnapshot, doc } from 'firebase/firestore';
import { useEffect, useState, createContext } from 'react';
import { PropTypes } from 'prop-types';

import { db } from '../api/firebase';
export const usersData = collection(db, 'Users');
export const needHelpPostsData = collection(db, 'Posts-need-help');
export const offerHelpPostsData = collection(db, 'Posts-offer-help');

export const ThemeContext = createContext();
export const ThemeProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    onSnapshot(doc(db, 'Users', 'zpiNSV5oKSGw9DVMTy4a'), (doc) => {
      setUser({ id: 'zpiNSV5oKSGw9DVMTy4a', ...doc.data() });
    });
  }, []);

  return (
    <>
      <ThemeContext.Provider value={{ user }}>{children}</ThemeContext.Provider>
    </>
  );
};

ThemeProvider.propTypes = {
  children: PropTypes.any,
};

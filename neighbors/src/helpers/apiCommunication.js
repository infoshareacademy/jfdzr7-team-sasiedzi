import { collection, onSnapshot, where, query, documentId } from 'firebase/firestore';
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
      <UserContext.Provider value={{ user, isAuth }}>{children}</UserContext.Provider>
    </>
  );
};

ThemeProvider.propTypes = {
  children: PropTypes.any,
};

export const getOfferHelpPosts = (querySnapshot) => {
  return querySnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
};

export const getUserProfileInfo = (usersData, authID, setProfileData) => {
  onSnapshot(query(usersData, where(documentId(), '==', `${authID}`)), (querySnapshot) => {
    querySnapshot.docs.map((element) => {
      return setProfileData({ id: element.id, ...element.data() });
    });
  });
};

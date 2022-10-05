import { getAuth } from 'firebase/auth';

import { auth } from '../../api/firebase';
export const UserProfile = () => {
  console.log(auth.currentUser);
  return (
    <>
      <h1>Your Profile!</h1>
      <h2></h2>
    </>
  );
};

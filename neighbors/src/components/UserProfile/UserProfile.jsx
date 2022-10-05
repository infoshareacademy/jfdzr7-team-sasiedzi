import { documentId } from '@firebase/firestore';
import { useEffect, useState } from 'react';
import { onSnapshot, where, query } from '@firebase/firestore';

import { usersData } from '../../helpers/apiCommunication';
import { auth } from '../../api/firebase';
export const UserProfile = () => {
  const [profileData, setProfileData] = useState(null);
  console.log(auth.currentUser.uid);
  useEffect(() => {
    onSnapshot(query(usersData, where(documentId(), '==', `${auth.currentUser.uid}`)), (querySnapshot) => {
      querySnapshot.docs.map((element) => {
        console.log(element.data());
        setProfileData({ id: element.id, ...element.data() });
      });
    });
  }, []);
  console.log(profileData);
  return (
    <>
      git
      {profileData ? (
        <>
          <h1>Your Profile!</h1>
          <p>First name: {profileData.firstName}</p>
          <p>Last name: {profileData.lastName}</p>
          <p>Contact: {profileData.phoneNumber}</p>
          <p>City: {profileData.city}</p>
          <p>Street: {profileData.street}</p>
          <p>House number: {profileData.houseNumber ? <>{profileData.houseNumber}</> : <>Not given</>}</p>
          <button> Edit your data</button>
        </>
      ) : (
        <>Loadin Data</>
      )}
    </>
  );
};

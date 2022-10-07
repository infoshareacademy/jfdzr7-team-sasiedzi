import { documentId } from '@firebase/firestore';
import { useEffect, useState } from 'react';
import { onSnapshot, where, query } from '@firebase/firestore';

import { usersData } from '../../helpers/apiCommunication';
import { auth } from '../../api/firebase';
export const UserProfile = () => {
  const [profileData, setProfileData] = useState(null);
  const [edit, setEdit] = useState(false);
  const onClickEdit = () => {
    setEdit(true);
  };
  const onClickCancel = () => {
    setEdit(false);
  };
  const onClickSubmit = () => {
    setEdit(false);
  };
  const onChange = () => {};
  useEffect(() => {
    onSnapshot(query(usersData, where(documentId(), '==', `${auth.currentUser.uid}`)), (querySnapshot) => {
      querySnapshot.docs.map((element) => {
        setProfileData({ id: element.id, ...element.data() });
      });
    });
  }, []);
  return (
    <>
      {profileData ? (
        <>
          <h1>Your Profile!</h1>
          {edit ? (
            <>
              <form>
                <div>
                  <label htmlFor="firstName">First name: </label>
                  <input
                    className="input-field"
                    placeholder={profileData.firstName}
                    type="text"
                    id="firstName"
                    name="firstName"
                    onChange={onChange}
                  ></input>
                </div>
                <div>
                  <label htmlFor="lastName">Last name: </label>
                  <input
                    className="input-field"
                    type="text"
                    placeholder={profileData.lastName}
                    id="lastName"
                    name="lastName"
                    onChange={onChange}
                  ></input>
                </div>
                <div>
                  <label htmlFor="city">City: </label>
                  <input
                    className="input-field"
                    type="text"
                    id="city"
                    placeholder={profileData.city}
                    name="city"
                    onChange={onChange}
                  />
                </div>
                <div>
                  <label htmlFor="street">Street: </label>
                  <input
                    className="input-field"
                    placeholder={profileData.street}
                    type="text"
                    id="street"
                    name="street"
                    onChange={onChange}
                  />
                  <label htmlFor="houseNumber">No.: </label>
                  <input
                    className="input-field-short"
                    placeholder={profileData.houseNumber ? profileData.houseNumber : 'x'}
                    type="text"
                    id="houseNumber"
                    name="houseNumber"
                    onChange={onChange}
                  />
                </div>
                <div>
                  <label htmlFor="phoneNumber">Phone number: </label>
                  <input
                    className="input-field"
                    type="text"
                    placeholder={profileData.phoneNumber}
                    id="phoneNumber"
                    name="phoneNumber"
                    onChange={onChange}
                  />
                </div>
                <button onClick={onClickSubmit}>Submit changes </button>
                <button onClick={onClickCancel}>Cancel edit </button>
              </form>
            </>
          ) : (
            <>
              {' '}
              <button onClick={onClickEdit}> Edit your data</button>
              <p>First name: {profileData.firstName}</p>
              <p>Last name: {profileData.lastName}</p>
              <p>Contact: {profileData.phoneNumber}</p>
              <p>City: {profileData.city}</p>
              <p>Street: {profileData.street}</p>
              <p>House number: {profileData.houseNumber ? <>{profileData.houseNumber}</> : <>Not given</>}</p>
            </>
          )}
        </>
      ) : (
        <>Loading Data</>
      )}
    </>
  );
};

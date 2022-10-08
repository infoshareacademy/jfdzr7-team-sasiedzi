import { documentId, updateDoc } from '@firebase/firestore';
import { useEffect, useState } from 'react';
import { onSnapshot, where, query, doc } from '@firebase/firestore';

import { db } from '../../api/firebase';
import { usersData } from '../../helpers/apiCommunication';
import { auth } from '../../api/firebase';

import { UsersPosts } from './UsersPosts';
export const UserProfile = () => {
  const clearForm = {
    firstName: '',
    lastName: '',
    city: '',
    street: '',
    phoneNumber: '',
    houseNumber: '',
  };
  const [profileData, setProfileData] = useState(null);
  const [edit, setEdit] = useState(false);
  const [newUserData, setNewUserData] = useState(clearForm);
  const onClickEdit = () => {
    setEdit(true);
  };
  const onClickCancel = () => {
    setNewUserData(clearForm);
    setEdit(false);
  };
  const onChange = (e) => {
    const { name, value } = e.target;
    setNewUserData({
      ...newUserData,
      [name]: value,
    });
  };

  const onClickSubmit = () => {
    onSnapshot(query(usersData, where(documentId(), '==', `${auth.currentUser.uid}`)), (querySnapshot) => {
      querySnapshot.docs.map((element) => {
        setProfileData({ id: element.id, ...element.data() });
      });
    });

    const userDataCollection = doc(db, 'Users', `${auth.currentUser.uid}`);
    updateDoc(userDataCollection, {
      firstName: newUserData.firstName ? newUserData.firstName : profileData.firstName,
      lastName: newUserData.lastName ? newUserData.lastName : profileData.lastName,
      city: newUserData.city ? newUserData.city : profileData.city,
      street: newUserData.street ? newUserData.street : profileData.street,
      phoneNumber: newUserData.phoneNumber ? newUserData.phoneNumber : profileData.phoneNumber,
      houseNumber: newUserData.houseNumber ? newUserData.houseNumber : profileData.houseNumber,
    });

    setNewUserData(clearForm);
    setEdit(false);
  };

  // Displaying profile data
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
                    value={newUserData.firstName}
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
                    value={newUserData.lastName}
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
                    value={newUserData.city}
                    name="city"
                    onChange={onChange}
                  />
                </div>
                <div>
                  <label htmlFor="street">Street: </label>
                  <input
                    className="input-field"
                    placeholder={profileData.street}
                    value={newUserData.street}
                    type="text"
                    id="street"
                    name="street"
                    onChange={onChange}
                  />
                  <label htmlFor="houseNumber">No.: </label>
                  <input
                    className="input-field-short"
                    placeholder={profileData.houseNumber ? profileData.houseNumber : 'x'}
                    value={newUserData.houseNumber}
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
                    value={newUserData.phoneNumber}
                    placeholder={profileData.phoneNumber}
                    id="phoneNumber"
                    name="phoneNumber"
                    onChange={onChange}
                  />
                </div>
                <button className="btn" type="submit" onClick={onClickSubmit}>
                  Submit changes{' '}
                </button>
                <button className="btn" onClick={onClickCancel}>
                  Cancel edit{' '}
                </button>
              </form>
            </>
          ) : (
            <>
              <button className="btn" onClick={onClickEdit}>
                Edit your data
              </button>
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
      <UsersPosts />
    </>
  );
};

import { updateDoc, doc } from '@firebase/firestore';
import { useEffect, useState } from 'react';

import { db } from '../../api/firebase';
import { usersData } from '../../helpers/apiCommunication';
import { auth } from '../../api/firebase';
import { getUserProfileInfo } from '../../helpers/apiCommunication';

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
    getUserProfileInfo(usersData, auth.currentUser.uid, setProfileData);

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
    getUserProfileInfo(usersData, auth.currentUser.uid, setProfileData);
  }, []);
  return (
    <>
      <section className="bg-gradient pt-20 pb-20">
        <div className="container card p-20">
          {profileData ? (
            <>
              <h1 className="header-1 mb-20">Your Profile</h1>
              {edit ? (
                <>
                  <form>
                    <div>
                      <label htmlFor="firstName">First name: </label>
                      <br />
                      <input
                        className="input-field"
                        defaultValue={profileData.firstName}
                        type="text"
                        id="firstName"
                        name="firstName"
                        onChange={onChange}
                      ></input>
                    </div>
                    <div>
                      <label htmlFor="lastName">Last name: </label>
                      <br />
                      <input
                        className="input-field"
                        type="text"
                        defaultValue={profileData.lastName}
                        id="lastName"
                        name="lastName"
                        onChange={onChange}
                      ></input>
                    </div>
                    <div>
                      <label htmlFor="city">City: </label>
                      <br />
                      <input
                        className="input-field"
                        type="text"
                        id="city"
                        defaultValue={profileData.city}
                        name="city"
                        onChange={onChange}
                      />
                    </div>
                    <div>
                      <div className="inline-block mr-10">
                        <label htmlFor="street">Street: </label>
                        <br />
                        <input
                          className="input-field"
                          defaultValue={profileData.street}
                          type="text"
                          id="street"
                          name="street"
                          onChange={onChange}
                        />
                      </div>
                      <div className="inline-block">
                        <label htmlFor="houseNumber">No.: </label>
                        <br />
                        <input
                          className="input-field-short"
                          defaultValue={profileData.houseNumber ? profileData.houseNumber : 'x'}
                          type="text"
                          id="houseNumber"
                          name="houseNumber"
                          onChange={onChange}
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="phoneNumber">Phone number: </label>
                      <br />
                      <input
                        className="input-field"
                        type="text"
                        defaultValue={profileData.phoneNumber}
                        id="phoneNumber"
                        name="phoneNumber"
                        onChange={onChange}
                      />
                    </div>
                    <button className="btn mr-10" type="submit" onClick={onClickSubmit}>
                      Submit changes{' '}
                    </button>
                    <button className="btn btn-2" onClick={onClickCancel}>
                      Cancel edit{' '}
                    </button>
                  </form>
                </>
              ) : (
                // osobny komponent
                <>
                  <div className="row">
                    <div className="col-auto">
                      <p>First name</p>
                      <p className="fs-20 color-green fw-bold">{profileData.firstName}</p>
                    </div>
                    <div className="col-auto">
                      <p>Last name</p>
                      <p className="fs-20 color-green fw-bold">{profileData.lastName}</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-auto">
                      <p>Contact:</p>
                      <p className="color-green fw-bold">{profileData.phoneNumber}</p>
                    </div>
                    <div className="col-auto">
                      <p>City:</p>
                      <p className="color-green fw-bold">{profileData.city}</p>
                    </div>
                    <div className="col-auto">
                      <p>Street:</p>
                      <p className="color-green fw-bold">{profileData.street}</p>
                    </div>
                    <div className="col-auto">
                      <p>House number:</p>
                      <p className="color-green fw-bold">
                        {' '}
                        {profileData.houseNumber ? <>{profileData.houseNumber}</> : <>Not given</>}
                      </p>
                    </div>
                    <div className="col-auto">
                      <button className="btn" onClick={onClickEdit}>
                        Edit your data
                      </button>
                    </div>
                  </div>
                </>
              )}
            </>
          ) : (
            <>Loading Data</>
          )}
          <h2 className="header-2 mt-50">Your posts</h2>
          <UsersPosts />
        </div>
      </section>
    </>
  );
};

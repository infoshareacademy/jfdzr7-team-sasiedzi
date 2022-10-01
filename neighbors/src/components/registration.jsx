/* eslint-disable prettier/prettier */
import { useState } from 'react';
import { addDoc } from 'firebase/firestore';
import { createUserWithEmailAndPassword, signOut } from 'firebase/auth';

import { firebaseErrors } from '../api/firebase';
import { auth } from '../api/firebase';
import { usersData } from '../helpers/apiCommunication';
import { isPasswordValid } from '../helpers/validation';
export const Registration = () => {
  const defaultFormState = {
    firstName: '',
    lastName: '',
    email: '',
    city: '',
    street: '',
    houseNumber: '',
    phoneNumber: '',
    password: '',
  };
  const [newUser, setNewUser] = useState(defaultFormState);
  const [error, setError] = useState('');
  const onChange = (e) => {
    const { name, value } = e.target;
    setNewUser({
      ...newUser,
      [name]: value,
    });
  };

  const onClick = (e) => {
    e.preventDefault();
    if (!isPasswordValid(newUser.password)) {
      setError('Password needs to be at least 6 characters, one special character, and one number!');
      return;
    }
    setError('');
    createUserWithEmailAndPassword(auth, newUser.email, newUser.password)
      .then((jwt) => {
        console.log(jwt);
        signOut(auth);
      })
      .catch((e) => {
        console.dir(e);
        alert(firebaseErrors[e.code]);
      });
    addDoc(usersData, newUser).then(() => {});
    setNewUser(defaultFormState);
  };

  return (
    <>
      <form className="m-50">
        {/* <form action='' className='sign-up-form'> */}
        <h2 className="title">Sign up</h2>
        <div>
          <label htmlFor="firstName">First name: </label>
          <input
            className="input-field"
            type="text"
            id="firstName"
            value={newUser.firstName}
            name="firstName"
            onChange={onChange}
          ></input>
        </div>

        <div>
          <label htmlFor="lastName">Last name: </label>
          <input
            className="input-field"
            type="text"
            id="lastName"
            value={newUser.lastName}
            name="lastName"
            onChange={onChange}
          ></input>
        </div>

        <div>
          <label htmlFor="email">Email: </label>
          <input
            className="input-field"
            type="email"
            id="email"
            value={newUser.email}
            name="email"
            onChange={onChange}
          ></input>
        </div>

        <div>
          <label htmlFor="city">City: </label>
          <input
            className="input-field"
            type="text"
            id="city"
            value={newUser.city}
            name="city"
            onChange={onChange}
          ></input>
        </div>
        <div>
          <label htmlFor="street">Street: </label>
          <input
            className="input-field"
            type="text"
            id="street"
            value={newUser.street}
            name="street"
            onChange={onChange}
          ></input>
          <label htmlFor="houseNumber">No.: </label>
          <input
            className="input-field-short"
            type="text"
            id="houseNumber"
            value={newUser.houseNumber}
            name="houseNumber"
            onChange={onChange}
          ></input>
        </div>

        <div>
          <label htmlFor="phoneNumber">Phone number: </label>
          <input
            className="input-field"
            type="text"
            id="phoneNumber"
            value={newUser.phoneNumber}
            name="phoneNumber"
            onChange={onChange}
          ></input>
        </div>
        <div>
          <label htmlFor="password">Password: </label>
          <input
            className="input-field"
            type="password"
            id="password"
            value={newUser.password}
            name="password"
            onChange={onChange}
          ></input>
        </div>
        {/* {Error section} */}
        {error && <p>{error}</p>}
        <button className="btn" type="submit" onClick={onClick}>
          {' '}
          Submit
        </button>
      </form>
    </>
  );
};

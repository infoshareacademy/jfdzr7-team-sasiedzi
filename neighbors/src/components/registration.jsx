import { useState } from 'react';
import { addDoc } from 'firebase/firestore';

import { usersData } from '../helpers/apiCommunication';
import { isPasswordValid } from '../helpers/validation';
export const Registration = () => {
  const defaultFormState = {
    firstName: '',
    lastName: '',
    birthDate: '',
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
    addDoc(usersData, newUser).then(() => {});
    setNewUser(defaultFormState);
  };

  return (

    <>
      <form className="m-50">
        <div>
          <label htmlFor="firstName">First name: </label>
          <input type="text" id="firstName" value={newUser.firstName} name="firstName" onChange={onChange}></input>
        </div>

        <div>
          <label htmlFor="lastName">Last name: </label>
          <input type="text" id="lastName" value={newUser.lastName} name="lastName" onChange={onChange}></input>
        </div>

        <div>
          <label htmlFor="birthDate">Birth date: </label>
          <input type="text" id="birthDate" value={newUser.birthDate} name="birthDate" onChange={onChange}></input>
        </div>

        <div>
          <label htmlFor="email">Email: </label>
          <input type="email" id="email" value={newUser.email} name="email" onChange={onChange}></input>
        </div>

        <div>
          <label htmlFor="city">City: </label>
          <input type="text" id="city" value={newUser.city} name="city" onChange={onChange}></input>
        </div>
        <div>
          <label htmlFor="street">Street: </label>
          <input type="text" id="street" value={newUser.street} name="street" onChange={onChange}></input>
        </div>

        <div>
          <label htmlFor="houseNumber">House number: </label>
          <input
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
            type="text"
            id="phoneNumber"
            value={newUser.phoneNumber}
            name="phoneNumber"
            onChange={onChange}
          ></input>
        </div>
        <div>
          <label htmlFor="password">Password: </label>
          <input type="password" id="password" value={newUser.password} name="password" onChange={onChange}></input>
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

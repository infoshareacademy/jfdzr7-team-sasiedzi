import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock } from '@fortawesome/free-solid-svg-icons';
import { signInWithEmailAndPassword } from '@firebase/auth';
import '../mainLayout.css';
import { useState } from 'react';

import { auth, firebaseErrors } from '../../api/firebase';

export function Login() {
  const [signIn, setSignIn] = useState({});
  const onChange = (e) => {
    const { name, value } = e.target;
    setSignIn({
      ...signIn,
      [name]: value,
    });
  };
  const onClick = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, signIn.email, signIn.password)
      .then((jwt) => {})
      .catch((e) => {
        alert(firebaseErrors[e.code]);
      });
  };
  return (
    <>
      <form action="" className="sign-in-form">
        <h2 className="title">Sign in</h2>
        <div className="input-field">
          <FontAwesomeIcon className="icon" icon={faUser} />
          <input type="text" name="email" onChange={onChange} placeholder="Email" />
        </div>
        <div className="input-field">
          <FontAwesomeIcon className="icon" icon={faLock} />
          <input type="password" name="password" onChange={onChange} placeholder="Password" />
        </div>
        <button type="submit" onClick={onClick} className="btn solid">
          Login
        </button>
      </form>
    </>
  );
}

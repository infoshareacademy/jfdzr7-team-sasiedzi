import React from 'react';

export function Login() {
  return (
    <>
      <form className="sign-in-form">
        <h2 className="title">Sign in</h2>
        <div className="input-field">
          <i className="fas fa-user" />
          <input type="password" placeholder="Password" />
        </div>
        <input type="submit" value="Login" className="btn solid" />
      </form>
    </>
  );
}

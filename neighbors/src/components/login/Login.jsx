import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock } from '@fortawesome/free-solid-svg-icons';
import '../mainLayout.css';

export function Login() {
  return (
    <>
      <form action="" className="sign-in-form">
        <h2 className="title">Sign in</h2>
        <div className="input-field">
          <FontAwesomeIcon className="icon" icon={faUser} />
          <input type="text" placeholder="Username" />
        </div>
        <div className="input-field">
          <FontAwesomeIcon className="icon" icon={faLock} />
          <input type="password" placeholder="Password" />
        </div>
        <input type="submit" value="Login" className="btn solid" />
      </form>
    </>
  );
}

import { Link, NavLink } from 'react-router-dom';
import { signOut } from 'firebase/auth';

import { auth } from '../../api/firebase';

function openNav() {
  document.getElementById('mobileNav').style.height = '100%';
}

function closeNav() {
  document.getElementById('mobileNav').style.height = '0%';
}

export const Navbar = () => {
  const onClickLogOut = () => {
    signOut(auth);
  };
  return (
    <>
      <nav className="navbar">
        <NavLink className="navbar-link" to={`/help-board`}>
          I want to help
        </NavLink>

        <NavLink className="navbar-link" to={`/need-help`}>
          I need help
        </NavLink>
        <NavLink className="navbar-link" to={`/how`}>
          How it works
        </NavLink>

        <Link className="btn" to={`/profile`}>
          Profile
        </Link>

        <button className="btn btn-2" onClick={onClickLogOut}>
          Log out
        </button>
        <button onClick={openNav} className="btn nav-hamburger">
          <div></div>
          <div></div>
          <div></div>
        </button>
      </nav>
      <nav className="nav-mobile" id="mobileNav">
        <a href="#" className="closeBtn" onClick={closeNav}>
          &times;
        </a>
        <div className="nav-mobile-content">
          <NavLink className="navbar-link" to={`/help-board`}>
            I want to help
          </NavLink>

          <NavLink className="navbar-link" to={`/need-help`}>
            I need help
          </NavLink>
          <NavLink className="navbar-link" to={`/how`}>
            How it works
          </NavLink>

          <Link className="btn" to={`/profile`}>
            Profile
          </Link>

          <button className="btn btn-2" onClick={onClickLogOut}>
            Log out
          </button>
        </div>
      </nav>
    </>
  );
};

import { Link, NavLink } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { useContext } from 'react';

import { auth } from '../../api/firebase';
import { UserContext } from '../../helpers/apiCommunication';

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
  const { isAuth } = useContext(UserContext);
  return isAuth ? (
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

        <button className="btn btn-2 ml-10" onClick={onClickLogOut}>
          Log out
        </button>
        <button onClick={openNav} className="btn nav-hamburger ml-10">
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
  ) : (
    <>
      <nav className="navbar">
        <NavLink className="btn" to={`/`}>
          Login
        </NavLink>
        <NavLink className="btn btn-2 ml-10" to={`/`}>
          Register
        </NavLink>
        <button onClick={openNav} className="btn nav-hamburger ml-10">
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
          <NavLink className="btn" to={`/`}>
            Login
          </NavLink>
          <NavLink className="btn btn-2 ml-10" to={`/`}>
            Register
          </NavLink>
        </div>
      </nav>
    </>
  );
};

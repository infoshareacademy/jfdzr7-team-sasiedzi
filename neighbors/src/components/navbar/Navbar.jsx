import { Link, NavLink } from 'react-router-dom';
import styles from './Navbar.module.css';

export const Navbar = () => {
  return (
    <div className={styles.wrapper}>
      <NavLink className={styles.link1} to={`/help`}>
        Chcę pomóc
      </NavLink>
      <NavLink className={styles.link} to={`/need`}>
        Potrzebuję pomocy
      </NavLink>
      <Link className={styles.link} to={`/how`}>
        Jak to działa?
      </Link>

      <Link className={styles.btn} to={`/profil`}>
        Profil
      </Link>

      <Link className={styles['btn-2']} to={`/logout`}>
        wyloguj się
      </Link>
    </div>
  );
};

import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';

export const Navbar = () => {
  return (
    <div className={styles.wrapper}>
      <Link className={styles.link1} to={`/help`}>
        Chcę pomóc
      </Link>
      <Link className={styles.link} to={`/need`}>
        Potrzebuję pomocy
      </Link>
      <Link className={styles.link} to={`/how`}>
        Jak to działa?
      </Link>
      <button className={styles.btn}>
        <Link to={`/profil`}>Profil</Link>
      </button>
      <button className={styles['btn-2']}>
        <Link to={`/logout`}>wyloguj się</Link>
      </button>
    </div>
  );
};

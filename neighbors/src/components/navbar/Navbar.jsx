import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';

export const Navbar = () => {
  return (
    <div className={styles.wrapper}>
      <Link to={`/help`}>Chcę pomóc</Link>
      <Link to={`/`}>Potrzebuję pomocy</Link>
      <Link to={`/`}>Jak to działa?</Link>
      <button className={styles.button}>
        <Link to={`/profil`}>Profil</Link>
      </button>
      <button>wyloguj się</button>
    </div>
  );
};

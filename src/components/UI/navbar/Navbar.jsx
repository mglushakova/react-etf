import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Navbar.module.css';

function Navbar() {
  return (
    <nav className={classes.navbar}>
      <ul className={classes.list}>
        <li className={classes.item}>
          <NavLink to="/about">О приложении</NavLink>
        </li>
        <li className={classes.item}>
          <NavLink to="/portfolios">Портфели</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;

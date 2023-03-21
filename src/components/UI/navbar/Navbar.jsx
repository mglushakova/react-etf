import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Navbar.module.css';

function Navbar() {
  return (
    <nav className={classes.navbar}>
      <ul className={classes.list}>
        <li className={classes.item}>
          <NavLink to="/about">
            <svg
              width="12"
              height="16"
              viewBox="0 0 12 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path d="M4.293.293A1 1 0 0 1 5 0h2a1 1 0 0 1 0 2H5A1 1 0 0 1 4.293.293Z" />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M.586 1.586A2 2 0 0 0 0 3v11a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2 3 3 0 0 1-3 3H5a3 3 0 0 1-3-3 2 2 0 0 0-1.414.586Zm9.402 6.418a1 1 0 0 1-.281.703l-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L5 10.586l3.293-3.293a1 1 0 0 1 1.695.71Z"
              />
            </svg>
            О приложении
          </NavLink>
        </li>
        <li className={classes.item}>
          <NavLink to="/portfolios">
            <svg
              width="16"
              height="12"
              viewBox="0 0 16 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M2 0a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2V2h10a2 2 0 0 0-2-2H2Zm2 6a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6Zm6 4a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"
              />
            </svg>
            Портфели
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;

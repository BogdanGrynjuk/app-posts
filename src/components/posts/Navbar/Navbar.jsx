import React from 'react';
import { NavLink } from 'react-router-dom';
import css from './Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={css.navbar}>
      <NavLink className={({ isActive }) => isActive ? `${css.navbar__link} ${css.active}` : css.navbar__link} to='/posts'>Пости</NavLink>
      <NavLink className={({ isActive }) => isActive ? `${css.navbar__link} ${css.active}` : css.navbar__link} to='/about'>Опис сайту</NavLink>
    </nav>
  );
}

export default Navbar;

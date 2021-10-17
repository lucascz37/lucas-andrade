// UNUSED
import * as React from 'react';
import * as style from 'styles/menu.module.scss';
import { firstLetter, secondLetter } from 'styles/firstSection.module.scss';

const Menu = () => (
  <nav className={style.menuComponent}>
    <p className={style.logo}>
      <span className={firstLetter}>L</span>
      {' '}
      <span className={secondLetter}>A</span>
    </p>
  </nav>
);

export default Menu;

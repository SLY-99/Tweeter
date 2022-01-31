import React from 'react';
import '../Header/header.scss';
import Data from "../../Localization/data";
import { Context } from '../../Context/localization'
import { Context as ThemeContext } from '../../Context/theme'

function Header() {

  const { state, setState } = React.useContext(Context);
  const { theme, setTheme } = React.useContext(ThemeContext);
  console.log(theme);

  return (
    <>
    <div className='header__wrapper border-bottom border-2'>
        <p className='header__title'>{Data[state].header.title}</p>
        <select className='header__select-lang' defaultValue={state} onChange={(evt) => setState(evt.target.value)}>
          <option value="en">EN</option>
          <option value="ru">RU</option>
          <option value="uz">UZ</option>
        </select>

        <select className='header__select-theme' defaultValue={state} onChange={(evt) => setTheme(evt.target.value)}>
          <option value="light">light</option>
          <option value="dark">dark</option>
        </select>
    </div>
    </>
  );
}

export default Header;
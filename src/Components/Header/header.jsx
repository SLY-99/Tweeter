import '../Header/header.scss';
import React from 'react';
import Icon from "../../Assets/Images/Icons/light-mode-icon.svg";
import Data from "../../Localization/data";

function Header({lang,setLang}) {
  return (
    <>
    <div className='header__wrapper border-bottom border-2'>
        <p className='header__title'>{Data[lang].header.title}</p>
        <select className='header__select' value={lang} onChange={(evt) => setLang(evt.target.value)}>
          <option value="en">EN</option>
          <option value="ru">RU</option>
          <option value="uz">UZ</option>
        </select>
        <img className='header__img' src={Icon} alt="light-mode" />
    </div>
    </>
  );
}

export default Header;
import React from 'react';
import '../Nav/nav.scss';
import Data from "../../Localization/data";
import { Context } from '../../Context/localization';
import {NavLink} from "react-router-dom";


function Nav() {

  const { state } = React.useContext(Context)
  return (
    <>
    <ul className='nav__list'>
        <li className='nav__item'><NavLink to="/home" className='nav__link' href="#">{Data[state].sidebar.nav.home}</NavLink></li>
        <li className='nav__item'><a className='nav__link' href="#">{Data[state].sidebar.nav.explore}</a></li>
        <li className='nav__item'><a className='nav__link' href="#">{Data[state].sidebar.nav.notifications}</a></li>
        <li className='nav__item'><a className='nav__link' href="#">{Data[state].sidebar.nav.messages}</a></li>
        <li className='nav__item'><a className='nav__link' href="#">{Data[state].sidebar.nav.bookmarks}</a></li>
        <li className='nav__item'><a className='nav__link' href="#">{Data[state].sidebar.nav.lists}</a></li>
        <li className='nav__item'><NavLink to="/profile" className='nav__link' href="#">{Data[state].sidebar.nav.profile}</NavLink></li>
        <li className='nav__item'><a className='nav__link' href="#">{Data[state].sidebar.nav.more}</a></li>
    </ul>
    </>
  );
}

export default Nav;
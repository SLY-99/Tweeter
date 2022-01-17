import React from 'react';
import '../Nav/nav.scss';
import Home from "../../Assets/Images/Icons/home-icon.svg";
import Explore from "../../Assets/Images/Icons/hashtag-icon.svg";
import Notifications from "../../Assets/Images/Icons/notification-icon.svg";
import Messages from "../../Assets/Images/Icons/message-icon.svg";
import Bookmarks from "../../Assets/Images/Icons/bookmark-icon.svg";
import Lists from "../../Assets/Images/Icons/list-icon.svg";
import Profile from "../../Assets/Images/Icons/profile-icon.svg";
import More from "../../Assets/Images/Icons/more-icon.svg";
import Data from "../../Localization/data";


function Nav({lang}) {
  return (
    <>
    <ul className='nav__list'>
        <li className='nav__item'><a className='nav__link' href="#">{Data[lang].sidebar.nav.home}</a></li>
        <li className='nav__item'><a className='nav__link' href="#">{Data[lang].sidebar.nav.explore}</a></li>
        <li className='nav__item'><a className='nav__link' href="#">{Data[lang].sidebar.nav.notifications}</a></li>
        <li className='nav__item'><a className='nav__link' href="#">{Data[lang].sidebar.nav.messages}</a></li>
        <li className='nav__item'><a className='nav__link' href="#">{Data[lang].sidebar.nav.bookmarks}</a></li>
        <li className='nav__item'><a className='nav__link' href="#">{Data[lang].sidebar.nav.lists}</a></li>
        <li className='nav__item'><a className='nav__link' href="#">{Data[lang].sidebar.nav.profile}</a></li>
        <li className='nav__item'><a className='nav__link' href="#">{Data[lang].sidebar.nav.more}</a></li>
    </ul>
    </>
  );
}

export default Nav;
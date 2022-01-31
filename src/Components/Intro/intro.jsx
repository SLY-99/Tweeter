import React from 'react';
import '../Intro/intro.scss';
import ImgBobur from "../../Assets/Images/lg-bobur.png";
import Data from "../../Localization/data";
import { Context } from '../../Context/localization';



function Intro() {

    const { state } = React.useContext(Context)
  return (
    <>
    <div className='intro__wrapper border-bottom border-3'>
        <div className='intro__bg'>
            <img className='intro__img' src={ImgBobur} alt="ImgBobur" />
        </div>
        <div className='intro__box'>
            <button className='intro__btn'>{Data[state].main.edit}</button>
            <h3 className='intro__name'>Bobur</h3>
            <p className='intro__username'>@bobur_mavlonov</p>
            <p className='intro__job'>UX&UI designer at <span className='intro__link'> @abutechuz</span></p>
            <ul className='intro__list'>
                <li className='intro__item'>Mashag’daman</li>
                <li className='intro__item'><span className='intro__link'>t.me/boburjon_mavlonov</span></li>
            </ul>
            <ul className='intro__list'>
                <li className='intro__item2'>{Data[state].main.born} November 24, 2000</li>
                <li className='intro__item2'>{Data[state].main.join} May 2020</li>
            </ul>
            <div className='intro__text-box'>
                <p className='intro__follower'><span className='intro__number'>67 </span>{Data[state].main.follow}</p>
                <p className='intro__follower'><span className='intro__number'>47 </span>{Data[state].main.follower}</p>
            </div>
            <div className='intro__header'>
                <p className='intro__text'>{Data[state].main.tweets}</p>
                <p className='intro__text'>{Data[state].main.replies}</p>
                <p className='intro__text'>{Data[state].main.media}</p>
                <p className='intro__text'>{Data[state].main.likes}</p>
            </div>
        </div>
    </div>
    </>
  );
}

export default Intro;
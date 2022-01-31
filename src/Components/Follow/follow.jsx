import React from 'react';
import '../Follow/follow.scss';
import Mushtariy from "../../Assets/Images/img-mushtariy.png";
import Shuhratbek from "../../Assets/Images/img-shuhratbek.png";
import Data from "../../Localization/data";
import { Context } from '../../Context/localization'

function Follow() {
    const { state } = React.useContext(Context)
  return (
    <>
            <div className='follow__box2'>
            <h3 className='follow__title2'>{Data[state].aside.recommend.title}</h3>
            <div className='follow__mini-wrapper'>
                <img className='follow__img' src={Mushtariy} alt="Mushtariy" />
                <div className='follow__text-box'>
                    <p className='follow__name'>Mushtariy</p>
                    <p className='follow__username'>@Mushtar565266</p>
                </div>
                <button className='follow__btn'>{Data[state].aside.recommend.button}</button>
            </div>
            <div className='follow__mini-wrapper'>
                <img className='follow__img' src={Shuhratbek} alt="Shuhratbek" />
                <div className='follow__text-box'>
                    <p className='follow__name'>Shuhratbek</p>
                    <p className='follow__username'>@mrshukhrat</p>
                </div>
                <button className='follow__btn2'>{Data[state].aside.recommend.button}</button>
            </div>
            <a className='follow__link' href="#">{Data[state].aside.trends.button}</a>
        </div>
    </>
  );
}

export default Follow;
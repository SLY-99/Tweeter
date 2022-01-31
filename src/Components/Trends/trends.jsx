import React from 'react';
import '../Trends/trends.scss';
import Data from "../../Localization/data";
import { Context } from '../../Context/localization'

function Trends() {
    const { state } = React.useContext(Context)
  return (
    <>
            <div className='trends__box'>
            <h2 className='trends__title'>{Data[state].aside.trends.trend}</h2>
            <ul className='trends__list'>
                <li className='trends__item'>
                    <p className='trends__text'>{Data[state].aside.trends.trendsCountry}</p>
                    <h4 className='trends__sub-title'>{Data[state].aside.trends.revolution}</h4>
                    <p className='trends__tweets'>50.4K {Data[state].aside.trends.tweets}</p>
                </li>
                <li className='trends__item'>
                    <p className='trends__text'>{Data[state].aside.trends.trendsCountry}</p>
                    <h4 className='trends__sub-title'>{Data[state].aside.trends.revolution}</h4>
                    <p className='trends__tweets'>50.4K {Data[state].aside.trends.tweets}</p>
                </li>
                <li className='trends__item'>
                    <p className='trends__text'>{Data[state].aside.trends.trendsCountry}</p>
                    <h4 className='trends__sub-title'>{Data[state].aside.trends.revolution}</h4>
                    <p className='trends__tweets'>50.4K {Data[state].aside.trends.tweets}</p>
                </li>
            </ul>
            <a className='trends__link' href="#">{Data[state].aside.trends.button}</a>
        </div>
    </>
  );
}

export default Trends;
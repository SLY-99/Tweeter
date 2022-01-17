import '../Aside/aside.scss';
import Mushtariy from "../../Assets/Images/img-mushtariy.png";
import Shuhratbek from "../../Assets/Images/img-shuhratbek.png";
import Footer from "../Footer/footer";
import Data from "../../Localization/data";

function ASide({lang}) {
  return (
    <>
    <div className='aside__wrapper'>
        <input className='aside__search' type="search" placeholder={Data[lang].aside.trends.search} />
        <div className='aside__box'>
            <h2 className='aside__title'>{Data[lang].aside.trends.trend}</h2>
            <ul className='aside__list'>
                <li className='aside__item'>
                    <p className='aside__text'>{Data[lang].aside.trends.trendsCountry}</p>
                    <h4 className='aside__sub-title'>{Data[lang].aside.trends.revolution}</h4>
                    <p className='aside__tweets'>50.4K {Data[lang].aside.trends.tweets}</p>
                </li>
                <li className='aside__item'>
                    <p className='aside__text'>{Data[lang].aside.trends.trendsCountry}</p>
                    <h4 className='aside__sub-title'>{Data[lang].aside.trends.revolution}</h4>
                    <p className='aside__tweets'>50.4K Tweets</p>
                </li>
                <li className='aside__item'>
                    <p className='aside__text'>{Data[lang].aside.trends.trendsCountry}</p>
                    <h4 className='aside__sub-title'>{Data[lang].aside.trends.revolution}</h4>
                    <p className='aside__tweets'>50.4K {Data[lang].aside.trends.tweets}</p>
                </li>
            </ul>
            <a className='aside__link' href="#">{Data[lang].aside.trends.button}</a>
        </div>

        <div className='aside__box2'>
            <h3 className='aside__title2'>{Data[lang].aside.recommend.title}</h3>
            <div className='aside__mini-wrapper'>
                <img className='aside__img' src={Mushtariy} alt="Mushtariy" />
                <div className='aside__text-box'>
                    <p className='aside__name'>Mushtariy</p>
                    <p className='aside__username'>@Mushtar565266</p>
                </div>
                <button className='aside__btn'>{Data[lang].aside.recommend.button}</button>
            </div>
            <div className='aside__mini-wrapper'>
                <img className='aside__img' src={Shuhratbek} alt="Shuhratbek" />
                <div className='aside__text-box'>
                    <p className='aside__name'>Shuhratbek</p>
                    <p className='aside__username'>@mrshukhrat</p>
                </div>
                <button className='aside__btn2'>{Data[lang].aside.recommend.button}</button>
            </div>
            <a className='aside__link' href="#">{Data[lang].aside.trends.button}</a>
        </div>

        <Footer lang={lang}/>
    </div>
    </>
  );
}

export default ASide;
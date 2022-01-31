import '../Tweets/tweets.scss';
import Bobur from "../../Assets/Images/img-bobur.png";
import Comment from "../../Assets/Images/Icons/comment-icon.svg";
import Refresh from "../../Assets/Images/Icons/refresh-icon.svg";
import Heart from "../../Assets/Images/Icons/heart-icon.svg";
import Download from "../../Assets/Images/Icons/download-icon.svg";
import Stats from "../../Assets/Images/Icons/statistics-icon.svg";
import GreenRefresh from "../../Assets/Images/Icons/green-refresh-icon.svg";
import RedHeart from "../../Assets/Images/Icons/red-heart-icon.svg";
import LgBobur from "../../Assets/Images/bobur-large.png";
import Data from "../../Localization/data";

function ProTweets({lang}) {
    return (
        <>
        <div className='tweets__wrapper border-bottom border-2'>
        <img className='tweets__img' src={Bobur} alt="Bobur" />
        <div className='tweets__box'>
        <h4 className='tweets__name'>Bobur <span className='tweets__username'>@bobur_mavlonov · Apr 1</span></h4>
        <p className='tweets__text'>4-kursni tugatgunimcha kamida bitta biznesim bo'lishini, uylanish uchun moddiy jihatdan to'la-to'kis tayyor bo'lishni, sog'lik va jismoniy holatni normallashtirishni reja qildim</p>
        <div className='tweets__icons'>
        <span className='tweets__number'><img className='tweets__pic' src={Comment} alt="img" />10</span>
        <span className='tweets__number'><img className='tweets__pic' src={Refresh} alt="img" />1</span>
        <span className='tweets__number'><img className='tweets__pic' src={Heart} alt="img" />8</span>
        <span className='tweets__number'><img className='tweets__pic' src={Download} alt="img" /></span>
        <span className='tweets__number'><img className='tweets__pic' src={Stats} alt="img" /></span>
        </div>
        </div>
        </div>
        
        <div className='tweets__wrapper border-bottom border-2'>
        <img className='tweets__img' src={Bobur} alt="Bobur" />
        <div className='tweets__box'>
        <h4 className='tweets__name'>Bobur <span className='tweets__username'>@bobur_mavlonov · Apr 1</span></h4>
        <p className='tweets__text'>Bizda shunaqa bir illat bor: gap bo'lsa bo'ldi, nima deyayotganimizga qarab ham o'tirmaymiz. <br /> <br />
        Bitta biznes trener nito gapirib qo'ysa, hamma biznes trenerlar yomonga chiqadi slishkom aqlli odamlar nazdida. <br /> <br />
        Gap faqat biznes trenerlar haqida emas.</p>
        <div className='tweets__icons'>
        <span className='tweets__number'><img className='tweets__pic' src={Comment} alt="img" /></span>
        <span className='tweets__number'><img className='tweets__pic' src={GreenRefresh} alt="img" />5</span>
        <span className='tweets__number'><img className='tweets__pic' src={RedHeart} alt="img" />9</span>
        <span className='tweets__number'><img className='tweets__pic' src={Download} alt="img" /></span>
        <span className='tweets__number'><img className='tweets__pic' src={Stats} alt="img" /></span>
        </div>
        </div>
        </div>
        
        <div className='tweets__wrapper border-bottom border-2'>
        <img className='tweets__img' src={Bobur} alt="Bobur" />
        <div className='tweets__box'>
        <h4 className='tweets__name'>Bobur <span className='tweets__username'>@bobur_mavlonov · Apr 1</span></h4>
        <p className='tweets__text'>A bo'pti maskamasman</p>
        <img className='tweets__kebab' src={LgBobur} alt="LgBobur" />
        <div className='tweets__icons'>
        <span className='tweets__number'><img className='tweets__pic' src={Comment} alt="img" />10</span>
        <span className='tweets__number'><img className='tweets__pic' src={Refresh} alt="img" />1</span>
        <span className='tweets__number'><img className='tweets__pic' src={Heart} alt="img" />8</span>
        <span className='tweets__number'><img className='tweets__pic' src={Download} alt="img" /></span>
        <span className='tweets__number'><img className='tweets__pic' src={Stats} alt="img" /></span>
        </div>
        </div>
        </div>
        </>
        );
    }
    
    export default ProTweets;
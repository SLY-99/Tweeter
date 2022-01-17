import '../Tweets/tweets.scss';
import Designsta from "../../Assets/Images/img-designsta.png";
import Cloutex from "../../Assets/Images/img-cloutex.png";
import Creative from "../../Assets/Images/img-creativePhoto.png";
import Comment from "../../Assets/Images/Icons/comment-icon.svg";
import Refresh from "../../Assets/Images/Icons/refresh-icon.svg";
import Heart from "../../Assets/Images/Icons/heart-icon.svg";
import Download from "../../Assets/Images/Icons/download-icon.svg";
import Stats from "../../Assets/Images/Icons/statistics-icon.svg";
import GreenRefresh from "../../Assets/Images/Icons/green-refresh-icon.svg";
import RedHeart from "../../Assets/Images/Icons/red-heart-icon.svg";
import Kebab from "../../Assets/Images/img-kebab.png";

function Tweets() {
  return (
    <>
    <div className='tweets__wrapper border-bottom border-2'>
        <img className='tweets__img' src={Designsta} alt="designsta" />
        <div className='tweets__box'>
            <h4 className='tweets__name'>Designsta <span className='tweets__username'>@inner · 25m</span></h4>
            <p className='tweets__text'>Twitterdagi ayol-erkak qarama-qarshiliginglardan o'zinglar zerikmadinglarmi?</p>
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
        <img className='tweets__img' src={Cloutex} alt="Cloutex" />
        <div className='tweets__box'>
            <h4 className='tweets__name'>cloutexhibition <span className='tweets__username'>@RajLahoti · 22m</span></h4>
            <p className='tweets__text'>YPIP dasturining bu yilgi sezoni ham o’z nihoyasiga yetmoqda. Mentorlik davomida talaba va yangi bitiruvchilarni o’sayotganini ko’rib hursand bo’ladi odam.</p>
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
        <img className='tweets__img' src={Creative} alt="Creative" />
        <div className='tweets__box'>
            <h4 className='tweets__name'>CreativePhoto <span className='tweets__username'>@cloutexhibition · 1h</span></h4>
            <p className='tweets__text'>Обетда..... <br /> Кечиринглар</p>
            <img className='tweets__kebab' src={Kebab} alt="kebab" />
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

export default Tweets;
import '../Sidebar/sidebar.scss';
import Logo from "../../Assets/Images/twitter-logo.png";
import Bobur from "../../Assets/Images/img-bobur.png";
import Nav from "../Nav/nav";

function Sidebar({lang}) {
  return (
    <>
    <div className='sidebar__wrapper'>
      <a href="#"><img className='sidebar__logo' src={Logo} alt="logo" /></a>
      <Nav lang={lang}/>
      <button className='sidebar__btn'>Tweet</button>
    <div className='sidebar__box'>
      <img className='sidebar__img' src={Bobur} alt="img-bobur" />
      <div className='sidebar__text-wrapper'>
        <p className='sidebar__name'>Bobur</p>
        <p className='sidebar__username'>@bobur_mavlonov</p>
      </div>
    </div>
    </div>
    </>
  );
}

export default Sidebar;
import '../Footer/footer.scss';
import Data from "../../Localization/data";

function Footer({lang}) {
  return (
    <>
    <div className='footer__wrapper'>
      <ul className='footer__list'>
        <li className='footer__item'><a className='footer__link' href="#">{Data[lang].footer.terms}</a></li>
        <li className='footer__item'><a className='footer__link' href="#">{Data[lang].footer.privacy}</a></li>
        <li className='footer__item'><a className='footer__link' href="#">{Data[lang].footer.cookie}</a></li>
      </ul>
      <ul className='footer__list'>
        <li className='footer__item'><a className='footer__link' href="#">{Data[lang].footer.imprint}</a></li>
        <li className='footer__item'><a className='footer__link' href="#">{Data[lang].footer.ads}</a></li>
        <li className='footer__item'><a className='footer__link' href="#">{Data[lang].footer.more}</a></li>
        <li className='footer__item'><a className='footer__link' href="#">&copy; {Data[lang].footer.copyright}</a></li>
      </ul>
    </div>
    </>
  );
}

export default Footer;
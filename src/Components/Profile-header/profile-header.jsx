import React from 'react';
import '../Profile-header/profile-header.scss';
import Arrow from "../../Assets/Images/Icons/arrow-icon.svg";
import Data from "../../Localization/data";
import { Context } from '../../Context/localization';
import {useNavigate} from "react-router-dom";

function ProHeader() {

  const { state } = React.useContext(Context)
  const navigate = useNavigate();
  return (
    <>
    <div className='head__wrapper border-bottom border-2'>
      <button className='head__btn' onClick={()=> navigate(-1)}><img className='head__img' src={Arrow} alt="Arrow" /></button>
        <div className='head__box'>
            <h3 className='head__title'>Bobur</h3>
            <p className='head__text'>1,070 {Data[state].aside.trends.tweets}</p>
        </div>
    </div>
    </>
  );
}

export default ProHeader;
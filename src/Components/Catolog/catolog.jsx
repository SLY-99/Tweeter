import React from 'react';
import '../Catolog/catolog.scss';
import Img1 from "../../Assets/Images/Rectangle1.png";
import Img2 from "../../Assets/Images/Rectangle2.png";
import Img3 from "../../Assets/Images/Rectangle3.png";
import Img4 from "../../Assets/Images/Rectangle4.png";
import Img5 from "../../Assets/Images/Rectangle5.png";
import Img6 from "../../Assets/Images/Rectangle6.png";

function Catolog() {

  return (
    <>
     <div className='catolog__wrapper'>
            <img className='catolog__img' src={Img1} alt="img1" />
            <img className='catolog__img' src={Img2} alt="img2" />
            <img className='catolog__img' src={Img3} alt="img3" />
        </div>
        <div className='catolog__wrapper'>
            <img className='catolog__img' src={Img4} alt="img4" />
            <img className='catolog__img' src={Img5} alt="img5" />
            <img className='catolog__img' src={Img6} alt="img6" />
        </div>
    </>
  );
}

export default Catolog;
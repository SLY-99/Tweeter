import React from 'react';
import '../Sign/sign.scss';
import Logo from "../../Assets/Images/twitter-logo.png"

function Sign({refjon}) {
    
    return (
        <>
        
        <div className='sign__wrapper'>
        <div className='sign__box'>
        <img className='sign__img' src={Logo} alt="logo-tweeter" />
        <h2 className='sign__title'>Create an account</h2>
        <form className='sign__form'>
        <input className='sign__email' type="email" placeholder='Name' />
        <input className='sign__password' type="password" placeholder='Phone number' />
        <a className='sign__link' href="#">Use email</a>
        <p className='sign__sub-title'>Date of birth</p>
        <p className='sign__text'>Facilisi sem pulvinar velit nunc, gravida scelerisque amet nibh sit. Quis bibendum ante phasellus metus.Pretium id ullamcorper blandit viverra dignissim eget tellus. Nibh mi massa in molestie a sit. Elit congue.</p>
        <div className='sign__select'>
        <select className='sign__month'>
            <option defaultValue="month" hidden>Month</option>
            <option value="january">January</option>
            <option value="february">February</option>
            <option value="march">March</option>
        </select>
        <select className='sign__day'>
            <option defaultValue="day" hidden>Day</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
        </select>
        <select className='sign__day'>
            <option defaultValue="year" hidden>Year</option>
            <option value="2022">2022</option>
            <option value="2021">2021</option>
            <option value="2020">2020</option>
        </select>
        </div>
        <button className='sign__btn'onClick={()=>{
            refjon.current.style.display = "none";
        }}>Next</button>
        </form>
        </div>
        </div>
        </>
        );
    }
    
    export default Sign;
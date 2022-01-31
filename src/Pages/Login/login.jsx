import React from 'react';
import '../Login/login.scss';
import Logo from "../../Assets/Images/twitter-logo.png"
import Sign from '../../Components/Sign/sign';
import {useNavigate} from "react-router-dom";

function Login() {

    const headingRef = React.useRef(null);
    const navigate = useNavigate();

  return (
    <>
    <div className='login__wrapper'>
        <div className='login__box'>
        <img className='login__img' src={Logo} alt="logo-tweeter" />
        <h1 className='login__title'>Log in to Twitter</h1>
        <form className='login__form' onSubmit={() => navigate('/home')}>
            <input required className='login__email' type="email" placeholder='Phone number, email address' />
            <input required className='login__password' type="password" placeholder='Password' />
            <button type='submit' className='login__btn'>Log In</button>
        </form>
        <div className='login__link-box'>
            <a className='login__link' href="#">Forgot password?</a>
            <a className='login__link' href="#" onClick={()=>{
                headingRef.current.style.display = "block";
              }}>Sign up to Twitter</a>
        </div>
        </div>
    </div>

    <div ref={headingRef} className='login__modalBackground'><Sign refjon={headingRef}/></div>
    </>
  );
}

export default Login;
import React from 'react';
import { AiOutlineArrowRight } from "react-icons/ai";
import './signupPopup.css'

function SignUpPopup({remove}) {

  const handleClick = () => {
    window.location.href='/signin'
  }
  return (
    <div>
      <div className='signup-content'>
        <div className='signup-title'>
          <p className='signup-title-text'>Email Verification</p>
        </div>
        <div className='signup-body'>
          <p className='signup-body-content'>Click on the link in your inbox/spam folder to verify yourself
           <a href="https://www.instagram.com/ieeesbm/?hl=en" target={"_blank"}> @ieeesbm</a></p>
          <button className='signup-button' onClick={handleClick}>
            <span className='signup-button-text'>Close</span>
            <AiOutlineArrowRight className="signup-right-arrow" />
            <div className='signup-button-overlay'></div>
          </button>
        </div>
      </div>
    </div>
  )
}

export default SignUpPopup;

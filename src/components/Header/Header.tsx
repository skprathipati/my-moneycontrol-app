import React from "react";
import moneyLogo from '../../assets/money-bag.svg';
import './Header.css';

const Header: React.FC = () => {
  return (
    <div className="headerContainer">
        <div className="header">
            <a href="/"><img src={moneyLogo} className="logo" alt="money logo" /></a>
            <div className="avatarWrapper">
                <a href="/">
                    <svg className="avatar-logo" viewBox="0 0 24 24" width="40" height="40" xmlns="http://www.w3.org/2000/svg">
                    <rect width="24" height="24" fill="none"/>
                    <path d="M0,15.832c0-4.947,6-3.958,6-5.937a2.881,2.881,0,0,0-.546-1.979A4.532,4.532,0,0,1,4,4.453A4.245,4.245,0,0,1,8,0a4.245,4.245,0,0,1,4,4.453a4.458,4.458,0,0,1-1.474,3.463A3,3,0,0,0,10,9.895c0,1.979,6,.989,6,5.937,0,0-1.593,1.168-8,1.168S0,15.832,0,15.832Z" transform="translate(4 3)" fill="#fff" stroke="#000000" stroke-miterlimit="10" stroke-width="1.5"/>
                    </svg>
                    <span className="logon-text">Logon</span>
                </a>
            </div>
            
        </div>
    </div>
  );
}

export default Header;
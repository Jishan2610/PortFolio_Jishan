import React from 'react';
import { useNavigate,useLocation} from 'react-router-dom';

import homeIconWhite from './../../assets/home_white.png';
import homeIconBlack from './../../assets/home_black.png';
import './GoHome.css';


export default function GoHome() {
    const location=useLocation();
    const whiteBtn = location.pathname === '/';
    const Navigate=useNavigate();
  return (
    <button
                className={`go-home-btn ${
                    whiteBtn ? 'white-bkg' : 'gradient-bkg'
                }`}
                onClick={()=>Navigate('/')}
            >
                <img
                    className='home-icon'
                    src={whiteBtn ? homeIconBlack : homeIconWhite}
                    alt='home-icon'
                />
            </button>
  )
}

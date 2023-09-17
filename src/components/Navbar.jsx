import React from 'react'
import '../styles/Navbar.css'
import Holdlinfo from '../assets/logos/HoldlinfoLogo.png'
import {BiLogoTelegram} from "react-icons/bi";
import Switchbtn from './Switchbtn';
import CountdownTimer from './CoundownTimer';
function Navbar () {
  return (
    <>
    <nav>
    <div id='nav-container-left'>
       <div id='nav-logo-container'>
            <img id='nav-logo' src={Holdlinfo} alt='Holdlinfo'/>
        </div>   
        <div id='nav-container-center'> 
        <div className='btn-container'><button className='btn-nav'>INR</button></div>
        <div className='btn-container'><button className='btn-nav'>BTC</button></div>
        <div className='btn-container'><button className='btn-nav'>BUY BTC</button></div>

            </div>
            <div id='nav-container-right'>
              <div id='right-inner-container'>
<CountdownTimer/>
                <div id='telegram-container'>
                  <div id='telegram-btn'>
                    <BiLogoTelegram className='telegram-icon'/>
                  <div id='telegram-text'>Connect Telegram</div>
                  </div>
                </div>
              <Switchbtn/>
              </div>   
            </div>
  </div>
       
    </nav>
    </>
  )
}

export default Navbar;
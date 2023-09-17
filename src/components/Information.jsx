import React from 'react'
import '../styles/Information.css'
function Information () {
  return (
    <>
    <div id='information-container'>

    <div className='text-header-container'>
        <div className='text-percent'>0.75 %</div>
        <div className='text-time'>5 Mins</div>
    </div>

    <div className='text-header-container'>
        <div className='text-percent'>0.53 %</div>
        <div className='text-time'>5 Mins</div>
    </div>
        
    <div id='heading-container'>
        <div id='heading-text-top'>Best Price to Trade</div>
        <div id='heading-price'>&#8377; 25,05,796</div>
        <div id='heading-text-bottom'>Average BTC/INR net price including commission</div>   
    </div>
    <div className='text-header-container'>
        <div className='text-percent'>6.62 %</div>
        <div className='text-time'>5 Mins</div>
    </div>
    <div className='text-header-container'>
        <div className='text-percent'>8.58 %</div>
        <div className='text-time'>5 Mins</div>
    </div>

    </div>

    </>
  )
}

export default Information;
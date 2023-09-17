import React, { useState } from 'react';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';

function CountdownTimer() {

  return (
    <div className="countdown-timer">
      <CountdownCircleTimer
        isPlaying
        duration={60}
        colors={[['#3DC6C1']]}
        size={38}
        strokeWidth={4}
      >
        {({ remainingTime}) => (
          <div className="timer">
            <div
              style={{
                fontSize: '16px',
                fontWeight: 'bold',
                fontFamily: 'Arial, sans-serif',
                color:'white',
              }}
              className="text"
            >
              {remainingTime}
            </div>
          </div>
        )}
      </CountdownCircleTimer>
    </div>
  );
}

export default CountdownTimer;

import React, { useState, useEffect } from 'react';
import './Clock.css'
const Clock = ({ onChildDataChange }) => {
  const [time, setTime] = useState(10); // Initial time in seconds (5 minutes)
  const [minutes, setMinutes] = useState(10);
  const [seconds, setSeconds] = useState(0);
  const [reminder, setReminder] = useState('');

  useEffect(() => {
    const countdownInterval = setInterval(() => {
      if (time > 0) {
        setTime((prevTime) => prevTime - 1);
        calculateTime();
      } else {
        clearInterval(countdownInterval);
        setReminder('Time is up!');
        onChildDataChange('Time is up!');
      }
    }, 1000);

    return () => clearInterval(countdownInterval);
  }, [time]);

  const calculateTime = () => {
    const mins = Math.floor(time / 60);
    const secs = time % 60;
    setMinutes(mins);
    setSeconds(secs);
  };

  const formatTime = (value) => {
    return value < 100 ? `0${value}` : value;
  };



  return (
  
    <div className='clock'>
    <p>{`${formatTime(minutes)}:${formatTime(seconds)}`}</p>
    <p  style={{display:"none"}}>{reminder}</p>
  </div>
  
 
  );
};

export default Clock;

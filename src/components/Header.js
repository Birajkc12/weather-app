import React, { useState, useEffect } from 'react';
import { WiDayCloudy } from 'react-icons/wi';

const Header = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    // Update the time every second
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    // Clear the interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  // Format the time as HH:mm
  const formattedTime = currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

  return (
    <header className="p-4 text-white flex justify-evenly items-center">
      <div className="flex flex-col items-start">
        <div className="flex items-center space-x-1">
          <WiDayCloudy className="w-10 h-10 mr-2 text-white-500" />
          <div className="text-[50px] font-normal font-Poppins">WeatherMe</div>
        </div>
        <div className="flex flex-row-reverse justify-between items-end w-full">
          <div>{formattedTime}</div>
        </div>
      </div>
      <nav>
        <ul className="flex space-x-4">
          <li className="text-white font-semibold border-b-2 border-white-500 px-2">Today</li>
          <li className="text-white hover:text-gray-300 px-2">Tomorrow</li>
          <li className="text-white hover:text-gray-300 px-2">Monthly Forecast</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

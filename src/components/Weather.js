import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useSpring, animated } from 'react-spring';
import { WiHumidity, WiStrongWind, WiThermometer } from 'react-icons/wi';
import { FaSun, FaCloud, FaCloudRain, FaSnowflake, FaCloudSun } from 'react-icons/fa';
import { AiOutlineSearch } from 'react-icons/ai';

const Weather = () => {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const props = useSpring({
    opacity: 1,
    from: { opacity: 0 },
  });

  const handleSearch = async () => {
    try {
      setLoading(true);
      const apiKey = '8a89075892a0aacf3e29f09e81ca8d53';
      const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

      const response = await axios.get(apiUrl);
      setWeatherData(response.data);
    } catch (error) {
      setError('Error fetching weather data. Please try again.');
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const getWeatherIcon = (weatherCondition) => {
    switch (weatherCondition) {
      case 'Clear':
        return <FaSun className="text-yellow-500 text-6xl" />;
      case 'Clouds':
        return <FaCloud className="text-gray-500 text-6xl" />;
      case 'Rain':
        return <FaCloudRain className="text-blue-500 text-6xl" />;
      case 'Snow':
        return <FaSnowflake className="text-white text-6xl" />;
      default:
        return <FaCloudSun className="text-gray-500 text-6xl" />;
    }
  };

  return (
    <div className="flex items-center justify-center">
      <animated.div
        className="max-w-md w-full bg-white rounded-xl overflow-hidden shadow-md p-8"
        style={props}
      >
        <div className="flex items-center p-2 border border-gray-300 w-full rounded text-black bg-zinc-300 rounded-[25px]">
          <AiOutlineSearch className="text-gray-500 mr-2" />
          <input
            type="text"
            placeholder="Search Location"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="flex-grow focus:outline-none bg-transparent"
          />
        </div>

        <button
          onClick={handleSearch}
          className="bg-teal-500 text-white p-2 mt-4 w-full rounded"
        >
          Search
        </button>

        {error && <p className="text-red-500 mt-2">{error}</p>}

        {weatherData && (
          <div className="mt-4">
            <h2 className="text-3xl font-semibold text-gray-800">{weatherData.name}</h2>
            <p className="text-xl text-gray-600">{weatherData.weather[0].description}</p>
            <div className="flex items-center justify-center my-4">
              {getWeatherIcon(weatherData.weather[0].main)}
            </div>
            <p className="text-4xl text-gray-800">
              {Math.round(weatherData.main.temp)} &#8451;
            </p>
            <div className="flex justify-between mt-4 text-gray-600">
              <div className="flex items-center">
                <WiHumidity className="text-blue-500 text-2xl" />
                <span className="ml-2">{weatherData.main.humidity}% Humidity</span>
              </div>
              <div className="flex items-center">
                <WiStrongWind className="text-green-500 text-2xl" />
                <span className="ml-2">{weatherData.wind.speed} m/s Wind</span>
              </div>
              <div className="flex items-center">
                <WiThermometer className="text-red-500 text-2xl" />
                <span className="ml-2">{weatherData.main.pressure} hPa Pressure</span>
              </div>
            </div>
          </div>
        )}
        {loading && <p className="text-gray-500 mt-2">Loading...</p>}
      </animated.div>
    </div>
  );
};

export default Weather;

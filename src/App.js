// App.js
import React, { useState } from 'react';
import Header from './components/Header';
import Weather from './components/Weather';
import Footer from './components/Footer';
import TemperatureToggle from './components/TemperatureToggle';

const App = () => {
  const [temperatureUnit, setTemperatureUnit] = useState('celsius');

  const handleToggle = (unit) => {
    setTemperatureUnit(unit);
  };

  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <Header />
      <TemperatureToggle unit={temperatureUnit} onToggle={handleToggle} />
      <Weather temperatureUnit={temperatureUnit} />
      <Footer />
    </div>
  );
};

export default App;

// TemperatureToggle.js
import React from 'react';

const TemperatureToggle = ({ unit, onToggle }) => {
  return (
    <div className="flex items-center">
      <label className="mr-2 text-white">Temperature:</label>
      <div className="relative flex items-center">
        {/* Hidden radio inputs */}
        <input
          type="radio"
          id="celsius"
          name="temperature"
          value="celsius"
          checked={unit === 'celsius'}
          onChange={() => onToggle('celsius')}
          className="hidden"
        />
        <input
          type="radio"
          id="fahrenheit"
          name="temperature"
          value="fahrenheit"
          checked={unit === 'fahrenheit'}
          onChange={() => onToggle('fahrenheit')}
          className="hidden"
        />

        {/* Switch */}
        <div
          onClick={() => onToggle(unit === 'celsius' ? 'fahrenheit' : 'celsius')}
          className={`w-12 h-6 bg-gray-400 rounded-full p-1 cursor-pointer ${
            unit === 'celsius' ? 'bg-green-500' : 'bg-blue-500'
          }`}
        >
          {/* Indicator */}
          <div
            className={`h-4 w-4 bg-white rounded-full shadow-md transform ${
              unit === 'celsius' ? 'translate-x-6' : 'translate-x-0'
            }`}
          />
        </div>
      </div>

      {/* Labels */}
      <label htmlFor="celsius" className="text-white cursor-pointer">
        Celsius
      </label>
      <label htmlFor="fahrenheit" className="text-white cursor-pointer ml-2">
        Fahrenheit
      </label>
    </div>
  );
};

export default TemperatureToggle;

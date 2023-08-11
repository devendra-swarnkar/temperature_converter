import React, { useState } from 'react';

function TemperatureConverter() {
  const [celsius, setCelsius] = useState('');
  const [fahrenheit, setFahrenheit] = useState('');
  const handleCelsiusChange = (value) => {
    const converted = (value * 9/5) + 32;
    setFahrenheit(converted || '');
  };
  return (
    <div className='content'>
        <div className='circle'></div>
        <div className='circle2'></div>
        <div className='contentbox'>
      <label>
        Celsius:
        <input
          type="number"
          value={celsius}
          onChange={(e) => setCelsius(e.target.value)}
          onBlur={(e) => handleCelsiusChange(e.target.value)}
        />
      </label>
        <label>
        Fahrenheit: {`${fahrenheit}`} &deg;F
      </label>
      <button type='button' className='btn' >Change</button>
      </div>
    </div>
  );
}
export default TemperatureConverter;
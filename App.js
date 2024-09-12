// src/App.js
import React, { useState } from 'react';
import './App.css';
import CalculatorButtons from './CalculatorButtons';
import CalculatorDisplay from './CalculatorDisplay';

function App() {
  const [displayValue, setDisplayValue] = useState('');
  
  const handleButtonClick = (button) => {
    if (button === 'C') {
      setDisplayValue('');
    } else if (button === '=') {
      try {
        setDisplayValue(eval(displayValue)); // Cẩn thận với eval trong thực tế
      } catch {
        setDisplayValue('Error');
      }
    } else {
      setDisplayValue(displayValue + button);
    }
  };

  return (
    <div className="App">
      <CalculatorDisplay value={displayValue} />
      <CalculatorButtons onButtonClick={handleButtonClick} />
    </div>
  );
}

export default App;

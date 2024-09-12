// src/CalculatorButtons.js
import React from 'react';

function CalculatorButtons({ onButtonClick }) {
  const buttons = [
    '7', '8', '9', '/', 
    '4', '5', '6', '*', 
    '1', '2', '3', '-', 
    '0', '.', '=', '+', 
    'C'
  ];

  return (
    <div className="calculator-buttons">
      {buttons.map((button) => (
        <button 
          key={button} 
          onClick={() => onButtonClick(button)}
        >
          {button}
        </button>
      ))}
    </div>
  );
}

export default CalculatorButtons;

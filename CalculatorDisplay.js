// src/CalculatorDisplay.js
import React from 'react';

function CalculatorDisplay({ value }) {
  return (
    <div className="calculator-display">
      {value}
    </div>
  );
}

export default CalculatorDisplay;

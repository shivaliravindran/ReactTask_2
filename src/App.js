import React, { useState } from 'react';
import './App.css'; 

const Calculator = () => {
  const [input, setInput] = useState('');

  const handleButtonClick = (value) => {
    setInput((prevInput) => prevInput + value);
  };
  

  const handleCalculate = () => {
    try {
      const result = eval(input);
      setInput(result.toString());
    } catch (error) {
      setInput('Error');
    }
  };

  const handleClear = () => {
    setInput('');
  };

  return (
    <div className="calculator">
      <div className="screen">{input}</div>
      <div className="button-row">
        <button className="button" onClick={() => handleButtonClick('7')}>7</button>
        <button className="button" onClick={() => handleButtonClick('8')}>8</button>
        <button className="button" onClick={() => handleButtonClick('9')}>9</button>
        <button className="button operator" onClick={() => handleButtonClick('/')}>/</button>
      </div>
      <div className="button-row">
        <button className="button" onClick={() => handleButtonClick('4')}>4</button>
        <button className="button" onClick={() => handleButtonClick('5')}>5</button>
        <button className="button" onClick={() => handleButtonClick('6')}>6</button>
        <button className="button operator" onClick={() => handleButtonClick('*')}>*</button>
      </div>
      <div className="button-row">
        <button className="button" onClick={() => handleButtonClick('1')}>1</button>
        <button className="button" onClick={() => handleButtonClick('2')}>2</button>
        <button className="button" onClick={() => handleButtonClick('3')}>3</button>
        <button className="button operator" onClick={() => handleButtonClick('-')}>-</button>
      </div>
      <div className="button-row">
        <button className="button" onClick={() => handleButtonClick('0')}>0</button>
        <button className="button" onClick={() => handleButtonClick('.')}>.</button>
        <button className="button" onClick={handleCalculate}>=</button>
        <button className="button operator" onClick={() => handleButtonClick('+')}>+</button>
      </div>
      <div className="button-row">
        <button className="button clear" onClick={handleClear}>C</button>
      </div>
    </div>
  );
};

export default Calculator;

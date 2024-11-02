// src/components/Calculator.tsx
"use client";

import { useState } from 'react';

const Calculator = () => {
    const [input, setInput] = useState('');
    const [result, setResult] = useState<number | null>(null);

    const handleButtonClick = (value: string) => {
        setInput((prevInput) => prevInput + value);
    };

    const handleClear = () => {
        setInput('');
        setResult(null);
    };

    const handleCalculate = () => {
        try {
            const calculation = eval(input);
            setResult(calculation);
        } catch (error) {
            setResult(null);
        }
    };

    // Add a function to handle percentages
    const handlePercentage = () => {
        try {
            const calculation = eval(input) / 100;
            setResult(calculation);
            setInput(String(calculation));
        } catch (error) {
            setResult(null);
        }
    };

    return (
        <div className="calculator">
            <div className="display">
                <input
                    type="text"
                    value={input}
                    readOnly
                    placeholder="Enter calculation"
                />
                <div className="result">{result !== null ? `= ${result}` : ''}</div>
            </div>
            <div className="buttons">
                {['1', '2', '3', '+', '4', '5', '6', '-', '7', '8', '9', '*', '0', '.', '/', '=', '%'].map((btn) => (
                    <button
                        key={btn}
                        onClick={
                            btn === '=' ? handleCalculate
                            : btn === '%' ? handlePercentage
                            : () => handleButtonClick(btn)
                        }
                    >
                        {btn}
                    </button>
                ))}
                <button onClick={handleClear}>C</button>
            </div>
        </div>
    );
};

export default Calculator;

import React from 'react';
import './../Styles/Button.css';

const Button = ({value, displayValue, updateDisplayValue}) => {
    const isOperator = ['+', '-', '*', '/'].includes(value);
    const isNumeric = /[0-9]/.test(value); // Vérifie si le bouton est un chiffre

    const handleClick = () => {
        if (isOperator) {
            if (!displayValue.endsWith('.')) {
                if (displayValue.includes('=')) {
                    const result = displayValue.split('=')[1];
                    if (result !== 'Error') {
                        updateDisplayValue(result + value);
                    }
                } else if (displayValue.includes('+') || displayValue.includes('-') || displayValue.includes('*') || displayValue.includes('/')) {
                    // on ne fait rien
                } else {
                    updateDisplayValue(displayValue + value);
                }
            }
        } else if (isNumeric) {
            if (!displayValue.includes('=')) {
                if (displayValue === '0') {
                    updateDisplayValue(value);
                } else {
                    updateDisplayValue(displayValue + value);
                }
            } else {
                updateDisplayValue(value);
            }
        } else if (value === '=') {
            if (!displayValue.includes('=') && !displayValue.endsWith('.') && !displayValue.endsWith('+') && !displayValue.endsWith('-') && !displayValue.endsWith('*') && !displayValue.endsWith('/')) {
                let res = eval(displayValue);
                if (res === Infinity || isNaN(res)) {
                    res = 'Error';
                }
                if (res.toString().includes('.')) {
                    res = res.toFixed(2);
                }
                updateDisplayValue(displayValue + value + res);

            }
        } else if (value === 'C') {
            updateDisplayValue('0');
        } else if (value === '.') {
            if (!displayValue.includes('=') && !displayValue.endsWith('.') && !displayValue.endsWith('+') && !displayValue.endsWith('-') && !displayValue.endsWith('*') && !displayValue.endsWith('/')) {
                updateDisplayValue(displayValue + value);
            }
        }
    };

    let ClassName = 'ClassButton';
    if (isOperator) {
        ClassName += 'Operator';
    } else if (isNumeric) {
        ClassName += 'Numeric';
    } else if (value === 'C') {
        ClassName += 'Clear';
    } else if (value === '=') {
        ClassName += 'Equal';
    } else if (value === '.') {
        ClassName += 'Point';
    }

    return (
        <button className={ClassName} onClick={handleClick}>
            {value}
        </button>
    );
};

export default Button;

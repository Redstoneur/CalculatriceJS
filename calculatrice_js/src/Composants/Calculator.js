import React, {useState} from 'react';
import ButtonContainer from './ButtonContainer';
import Screen from './Screen';
import './../Styles/Calculator.css';

const Calculator = () => {
    const [displayValue, setDisplayValue] = useState('0');
    const updateDisplayValue = (value) => {
        setDisplayValue(value);
    };

    // Ajoutez ici les fonctions pour gérer les opérations et les chiffres

    return (
        <div className="ClassCalculator">
            <Screen value={displayValue}/>
            <ButtonContainer displayValue={displayValue} updateDisplayValue={updateDisplayValue}/>
        </div>
    );
};

export default Calculator;

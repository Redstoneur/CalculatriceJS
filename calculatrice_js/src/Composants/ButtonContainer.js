import React from 'react';
import './../Styles/ButtonContainer.css';
import Button from "./Button";

const ButtonContainer = (props) => {
    const {displayValue, updateDisplayValue} = props;
    return (
        <div className="ClassButtonContainer">
            <div className="ClassButtonContainerPav">
                <Button value="1" displayValue={displayValue} updateDisplayValue={updateDisplayValue}/>
                <Button value="2" displayValue={displayValue} updateDisplayValue={updateDisplayValue}/>
                <Button value="3" displayValue={displayValue} updateDisplayValue={updateDisplayValue}/>
                <Button value="+" displayValue={displayValue} updateDisplayValue={updateDisplayValue}/>
                <Button value="4" displayValue={displayValue} updateDisplayValue={updateDisplayValue}/>
                <Button value="5" displayValue={displayValue} updateDisplayValue={updateDisplayValue}/>
                <Button value="6" displayValue={displayValue} updateDisplayValue={updateDisplayValue}/>
                <Button value="-" displayValue={displayValue} updateDisplayValue={updateDisplayValue}/>
                <Button value="7" displayValue={displayValue} updateDisplayValue={updateDisplayValue}/>
                <Button value="8" displayValue={displayValue} updateDisplayValue={updateDisplayValue}/>
                <Button value="9" displayValue={displayValue} updateDisplayValue={updateDisplayValue}/>
                <Button value="*" displayValue={displayValue} updateDisplayValue={updateDisplayValue}/>
                <Button value="C" displayValue={displayValue} updateDisplayValue={updateDisplayValue}/>
                <Button value="0" displayValue={displayValue} updateDisplayValue={updateDisplayValue}/>
                <Button value="." displayValue={displayValue} updateDisplayValue={updateDisplayValue}/>
                <Button value="/" displayValue={displayValue} updateDisplayValue={updateDisplayValue}/>
            </div>
            <div className="ClassButtonContainerEgual">
                <Button value="=" displayValue={displayValue} updateDisplayValue={updateDisplayValue}/>
            </div>
        </div>
    );
};

export default ButtonContainer;
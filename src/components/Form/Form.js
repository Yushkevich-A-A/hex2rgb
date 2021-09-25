import React, { useState } from 'react';
import './Form.css';

function Form() {
    const [ color, setColor ] = useState('orange');
    const [ value, setValue ] = useState('#');
    const [ rgb, setRgb ] = useState('rgb($255, 165, 0)');

    const handleChangeInput = event => {
        const inputValue = event.target.value;
        setValue(inputValue);

        if (inputValue.length < 1 || inputValue[0] !== '#') {
            setValue('#');
            return;
        }
        if (inputValue.length !== 7) {
            return;
        }
        const result = hexToRgb(inputValue);
        setRgb(( result === null ) ? 'ошибка' : `rgb(${result.r}, ${result.g}, ${result.b})`);
        setColor(( result === null ) ? 'orange' : inputValue);
    }

    return (
        <form className='form' style={{backgroundColor: color}}>
            <div>
                <input maxlength='7' className='form-input' type="text" onChange={handleChangeInput} value={value}/>
            </div>
            <div className='form-result'>
                <span className='form-result-text'>{rgb}</span>
            </div>
        </form >
    )
}

function hexToRgb(hex) {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
    } : null;
  }

export default Form;
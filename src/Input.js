import React from 'react';
import './styles/App.css';

const Input = () => {

    return(
        <div className ='input'>

            <label className="neu-label" htmlFor="input-field">Input field</label>
            <input className="neu-input" id="input-field" type="text" placeholder='Type here' />




        </div>
    )
}

export default Input;
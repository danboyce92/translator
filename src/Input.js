import React, { useState } from 'react';
import Convert from './Convert';
import './styles/App.css';




const Input = ({ handleTextChange }) => {

    return(
        <div className ='input'>

            <label className="neu-label" htmlFor="input-field">Input field</label>
            <textarea 
            className="neu-input" 
            id="input-field" 
            type="text" 
            placeholder='Type here'
            rows="2"
            onChange={(e) => {handleTextChange(e.target.value)}}
            />
            



            {/* <Convert />

            <Convert />

            <Convert /> */}

        </div>
    )
}

export default Input;
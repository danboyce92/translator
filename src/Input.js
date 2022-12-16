import React, { useState } from 'react';
import Convert from './Convert';
import './styles/App.css';

const languages = [
    {
        label: 'Swedish',
        value: 'sv'
    },
    {
        label: 'Danish',
        value: 'da'
    },
    {
        label: 'Norwegian',
        value: 'no'
    },
    {
        label: 'Icelandic',
        value: 'is'
    }
]



const Input = () => {
    const [text, setText] = useState('')

    return(
        <div className ='input'>

            <label className="neu-label" htmlFor="input-field">Input field</label>
            <input 
            className="neu-input" 
            id="input-field" 
            type="text" 
            placeholder='Type here'
            onChange={(e) => {setText(e.target.value)}}
            />
            

            <Convert 
            text={text}
            language={languages[0]}
            />

            {/* <Convert />

            <Convert />

            <Convert /> */}

        </div>
    )
}

export default Input;
import React from 'react';
import './styles/App.css';

const Input = ({ handleTextChange }) => {
  return (
    <div className="mx-auto w-1/2 sm:py-4 bg-indigo-400 shadow-indigo-700 shadow-lg rounded-lg">
      <div className="grid grid-cols-3 grid-rows-2">
        <label id="input" className="col-start-1 col-span-3 row-start-1 m-auto">
          Input Field
        </label>

        <div className="m-auto col-start-1 row-start-2 col-span-3">
          <textarea
            className="m-auto rounded-lg pl-3 pt-1"
            id="input-field"
            type="text"
            placeholder="Type here"
            rows="2"
            onChange={(e) => {
              handleTextChange(e.target.value);
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Input;

import React, { useState } from 'react';
import Input from './Input';
import TranslatedBox from './TranslatedBox';
import './styles/App.css'

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
    label: 'Finnish',
    value: 'fi'
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


function App() {

  const [text, setText] = useState('')


  const handleTextChange = (value) => {
     setText(value);
  }

  return (
    <div className="App">

      <Input 
      handleTextChange={handleTextChange}
      />

      <div className="languageBoxes">

      <TranslatedBox 
      lang="svenska"
      text={text}
      langcode={languages[0]}
      />


      <TranslatedBox 
      lang="dansk"
      text={text}
      langcode={languages[1]}
      />

      <TranslatedBox 
      lang="finnish"
      text={text}
      langcode={languages[2]}
      />

      <TranslatedBox 
      lang="norsk"
      text={text}
      langcode={languages[3]}
      />

      <TranslatedBox 
      lang="islensku"
      text={text}
      langcode={languages[4]}
      />



      </div>

    </div>
  );
}

export default App;

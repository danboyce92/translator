import React, { useState } from 'react';
import Input from './Input';
import TranslatedBox from './TranslatedBox';
import { languages } from './LanguageCodes';
import './styles/App.css';
import './index.css';

function App() {
  const [text, setText] = useState('');

  const handleTextChange = (value) => {
    setText(value);
  };

  return (
    <div className="App">
      <div className="max-w-[1200px] m-auto">
        <div id="title" className="flex justify-center underline">
          Nordic Translator
        </div>

        <Input handleTextChange={handleTextChange} />

        <div className="grid lg:grid-cols-2 grid-rows-5 lg:grid-rows-3 gap-4">
          <div className=" col-start-1 row-start-1 col-span-1 m-auto">
            <TranslatedBox lang="svenska" text={text} langcode={languages[0]} />
          </div>

          <div className="col-start-1 row-start-2 lg:col-start-2 lg:row-start-1 m-auto">
            <TranslatedBox lang="dansk" text={text} langcode={languages[1]} />
          </div>

          <div className="col-start-1 row-start-3 lg:col-start-1 lg:row-start-3 lg:col-span-2 m-auto">
            <TranslatedBox lang="finnish" text={text} langcode={languages[2]} />
          </div>

          <div className="col-start-1 row-start-4 lg:col-start-1 lg:row-start-2 m-auto">
            <TranslatedBox lang="norsk" text={text} langcode={languages[3]} />
          </div>

          <div className="col-start-1 row-start-5 lg:col-start-2 lg:row-start-2 m-auto">
            <TranslatedBox
              lang="islensku"
              text={text}
              langcode={languages[4]}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

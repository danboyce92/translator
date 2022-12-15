import React from 'react';
import Input from './Input';
import TranslatedBox from './TranslatedBox';

function App() {
  return (
    <div className="App">

      <Input />

      <div className="languageBoxes">
      <TranslatedBox 
      lang="svenska"
      />

      <TranslatedBox 
      lang="dansk"
      />

      <TranslatedBox 
      lang="norsk"
      />



      </div>

    </div>
  );
}

export default App;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './styles/App.css';
import './styles/swedish.css';

const Convert = ({ language, lang, text }) => {
  const [translated, setTranslated] = useState('');
  const [debouncedText, setDebouncedText] = useState(text);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebouncedText(text);
    }, 500);

    return () => {
      clearTimeout(timerId);
    };
  }, [text]);

  useEffect(() => {
    const doTranslation = async () => {
      const { data } = await axios.post(
        'https://translation.googleapis.com/language/translate/v2',
        {},
        {
          params: {
            q: debouncedText,
            target: language.value,
            key: 'AIzaSyBEddFdjbTZu2tJDcPB_Fs4PQ6RqGbK3VU',
          },
        }
      );
      setTranslated(data.data.translations[0].translatedText);
    };

    doTranslation();
  }, [language, debouncedText]);

  return (
    <div>
      <h1 id="translated-text" className={`${lang}box`}>
        {translated}
      </h1>
    </div>
  );
};

export default Convert;

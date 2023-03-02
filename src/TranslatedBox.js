import React from 'react';
import Convert from './Convert';
import './styles/swedish.css';
import './styles/danish.css';
import './styles/norwegian.css';
import './styles/icelandic.css';
import './styles/finnish.css';

const TranslatedBox = ({ lang, langcode, text }) => {
  return (
    <div className={`${lang} `}>
      <div className={`${lang}flag`}>
        <div className="blue"></div>
        <div className="white"></div>
      </div>

      <Convert text={text} lang={lang} language={langcode} />
    </div>
  );
};

export default TranslatedBox;

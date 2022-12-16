import React from 'react';
import './styles/swedish.css';
import './styles/danish.css';
import './styles/norwegian.css';
import './styles/icelandic.css';

const TranslatedBox = ({ lang }) => {

    return(
        <div className={lang}>
            <div className={`${lang}flag`}>
                <div className="blue"></div>
                <div className="white"></div>
            </div>


        </div>
    )
}

export default TranslatedBox;
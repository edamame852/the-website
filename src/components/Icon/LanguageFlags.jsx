import React from 'react';


export const LanguageFlags = ({ language }) => {
    let flagIcon;

    switch (language) {
        case 'en':
            flagIcon = <h1>Hello World</h1>;
            break;
        case 'jp':
            flagIcon = <h1>Hello World</h1>;
            break;
        default:
            flagIcon = null;
    }

    return <span>{flagIcon}</span>;
};
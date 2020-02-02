import React from 'react';

const optionalChaining = (object) => {
    return object?.bar?.buzz;
};
const Import = {};
export { optionalChaining, Import };

// create-react-app.test.js
//create-react-app.js
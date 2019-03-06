import React from 'react';

module.exports = props => React.createElement("h1", null, "Hello Hello ", props.name.split('').reverse().join(''));

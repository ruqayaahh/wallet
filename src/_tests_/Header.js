import React from 'react';
import ReactDOM from 'react-dom';
import Header from '../Components/Header';

it("renders the header", () => {
    ReactDOM.render(<Header />, document.getElementById('root'))
});
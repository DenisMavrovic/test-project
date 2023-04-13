import React from "react";
// import ReactDOM from "react-dom";
import * as ReactDOMClient from 'react-dom/client';
import App from './App';

const container = document.getElementById('root');

const root = ReactDOMClient.createRoot(container);

// ReactDOM.render(<App />, document.getElementById('root'));
root.render(<App tab="home" />);
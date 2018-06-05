import React from 'react';
import ReactDOM from 'react-dom';
import './Components/Global/global.css';
import App from './Components/App/App';
import registerServiceWorker from './registerServiceWorker';

window.document.body.onload = function () {
  ReactDOM.render(<App />, document.body);
  registerServiceWorker();
};

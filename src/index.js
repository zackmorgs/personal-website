import React from 'react';
import ReactDOM from 'react-dom';
import './Components/Global/global.css';
import App from './Components/App/App';
import registerServiceWorker from './registerServiceWorker';
ReactDOM.render(<App />, document.querySelector('body'));
registerServiceWorker();

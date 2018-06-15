import React from 'react';
import ReactDOM from 'react-dom';
import './Styles/Pages/index/css/index.css';
import App from './Components/App/App';
import registerServiceWorker from './registerServiceWorker';

var root = document.getElementById('root');
ReactDOM.render(<App />, root);
registerServiceWorker();

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.scss'
import * as serviceWorker from './serviceWorker';
import "./i18nextInit";

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();

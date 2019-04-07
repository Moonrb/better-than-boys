import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import projectRouter from './router/router'
ReactDOM.render(projectRouter, document.getElementById('root'));

serviceWorker.unregister();

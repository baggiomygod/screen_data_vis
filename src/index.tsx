import * as React from 'react';
import * as ReactDOM from 'react-dom';
// import App from './App';
import Router from 'src/router'
import './index.scss';
import 'src/style/special-effects.scss';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Router />,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();


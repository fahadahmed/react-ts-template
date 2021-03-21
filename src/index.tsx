import React from 'react';
import ReactDOM from 'react-dom';
import App from './pages/App';

import { Global, css } from '@emotion/react';
ReactDOM.render(
  <>
    <Global
      styles={css`
        .test-class {
          color: #ff7bda;
          font-family: Arial, Helvetica, sans-serif;
        }
      `}
    />
    <App />
  </>,
  document.querySelector('#root'),
);

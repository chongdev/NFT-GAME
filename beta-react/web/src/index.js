
import React from 'react'
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Web3ReactProvider } from '@web3-react/core'
import { getLibrary } from './utils/web3React'
import { ToastContainer } from 'react-toastify'

import './index.scss';
import 'react-toastify/dist/ReactToastify.css'
import App from './App';
import { createStore } from 'redux';
import allReducer from './redux/reducers'
import { Provider } from 'react-redux';

const store = createStore(
  allReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const rootElement = document.getElementById("root");

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Web3ReactProvider getLibrary={getLibrary}>
        <BrowserRouter>
          <App />
          <ToastContainer />
        </BrowserRouter>
      </Web3ReactProvider>
    </Provider>
  </React.StrictMode>,
  rootElement
);
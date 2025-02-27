import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import firbaseConfig from "./firbase-config";
import {FirebaseAppProvider} from 'reactfire';
ReactDOM.render(
  <FirebaseAppProvider firebaseConfig = {firbaseConfig}>
    <Suspense fallback={'Conectando con firebase'}>
    <App />
    </Suspense>
    </FirebaseAppProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

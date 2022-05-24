import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/app';
import reportWebVitals from './reportWebVitals';
import { FirebaseAppProvider } from 'reactfire';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBjKkGEmy8PlD269XE6SMLFwtvMiOYaIiU",
  authDomain: "kulukirjanpito-1548a.firebaseapp.com",
  projectId: "kulukirjanpito-1548a",
  storageBucket: "kulukirjanpito-1548a.appspot.com",
  messagingSenderId: "458597273209",
  appId: "1:458597273209:web:6eaac15807aa8c244ecea8",
  measurementId: "G-D67SSVYHXH"
};

//const root = document.getElementById('root');
ReactDOM.render(
  <React.StrictMode>
    <FirebaseAppProvider firebaseConfig={firebaseConfig}>
      <App />
    </FirebaseAppProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();




//const root = document.getElementById('root');
//ReactDOM.render(
  ////<React.StrictMode>
    //<App />, root
  ////</React.StrictMode>
//);
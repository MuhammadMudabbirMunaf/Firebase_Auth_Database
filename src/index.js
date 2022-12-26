import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCvAEiL-XZa7EURk__eG5qhyaiZKjdIMVM",
  authDomain: "fir-auth-example-1.firebaseapp.com",
  projectId: "fir-auth-example-1",
  storageBucket: "fir-auth-example-1.appspot.com",
  messagingSenderId: "473176139950",
  appId: "1:473176139950:web:e510d5b5ba5d61ad57653f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
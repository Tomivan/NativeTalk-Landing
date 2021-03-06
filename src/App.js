import React from 'react';
import Pages from './pages/index';
import './App.css';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
  apiKey: "AIzaSyDAS8IZlpzMxCzo4PWkmY73DrLApBO4d3w",
  authDomain: "connektappdata.firebaseapp.com",
  databaseURL: "https://connektappdata.firebaseio.com",
  projectId: "connektappdata",
  storageBucket: "connektappdata.appspot.com",
  messagingSenderId: "688283744468",
  appId: "1:688283744468:web:fa947578fa016b41aa6341",
  measurementId: "G-LG1VDNEGHN"
};



function App() {
  firebase.initializeApp(config);
  return (
    <div className="App">
      <Pages />
    </div>
  );
}

export default App;

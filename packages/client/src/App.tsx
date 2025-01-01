import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { getHelloMessage } from "./api";

function App() {
  const [msg, setMsg] = useState('Loading...');

  useEffect(() => {
    getHelloMessage().then(setMsg);
  }, []);

  return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>{msg}</p>
        </header>
      </div>
  );
}

export default App;

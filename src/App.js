import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Button } from 'antd-mobile';
import 'antd-mobile/dist/antd-mobile.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          @mogwai, @shaunorpen and @kvothe waz here.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Button type="primary" style={{ margin: '5px 0', width: '10vw', borderRadius: '90px', backgroundColor: '#FF6663' }}>Hello</Button>
      </header>
    </div>
  );
}

export default App;

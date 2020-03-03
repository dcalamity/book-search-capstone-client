import React from 'react';
import logo from './logo.svg';
import LogIn from './LogIn';
import Dashboard from './Dashboard';
import Booklist from './Booklist';
import Createcollection from './Createcollection';
import Bookinfo from './Bookinfo';
import Addbook from './Addbook';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <LogIn />
        <Dashboard />
        <Booklist />
        <Createcollection />
        <Bookinfo />
        <Addbook />
      </header>
    </div>
  );
}

export default App;

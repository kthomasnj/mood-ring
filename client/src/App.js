import React, { useState } from 'React';
import logo from './logo.svg';
import './App.css';
import { Login } from '../pages/Login';
import { Register } from '../pages/Register';

function App() {
  const [currentForm, setCurrentForm] = useState('login');

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }

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
      </header>
      {
        currentForm === 'login' ? <Login onFormSwitch={toggleForm} /> : <Register />
      }
      

    </div>
  );
}

export default App;

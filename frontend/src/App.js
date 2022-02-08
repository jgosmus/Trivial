import logo from './logo.svg';
import { useEffect } from 'react'
import './App.css';

function App() {

  useEffect(() => {
    setInterval(() => {
      fetch("/register/prueba/prueba1").then(res => res.json()).then(console.log)
    }, 5000)
  })

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
    </div>
  );
}

export default App;
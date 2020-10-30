import React,{useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [state , setState] = useState({
    name: 'lxfriday',
    age: 10,
    school: 'hzau',
  });
  
  console.log('render');

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
        <p>
          name: { state.name } <br/>
          age: { state.age } <br/>
          school: { state.school } <br/>

          <button onClick={() => setState(prev => ({ ...prev, name: 'John' }))}>change name</button>
          <button onClick={() => setState(prev => ({ ...prev, age: 100 }))}>change age</button>
          <button onClick={() => setState(state)}>change to the same state</button>
        </p>
      </header>
    </div>
  );
} 

export default App;

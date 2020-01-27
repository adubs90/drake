import ApolloClient from 'apollo-boost';
import React from 'react';
import logo from './logo.svg';
import './App.css';

const client = new ApolloClient({
  uri: "GraphQL endpoint uri goes here"
});

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
          Authentication
          Profile Page
          MobX
          Routing
        </a>
      </header>
    </div>
  );
}

export default App;

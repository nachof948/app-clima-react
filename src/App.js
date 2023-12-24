import './App.css';
import React from 'react';
import { Clima } from './indice';
import { NavBar } from './components/NavBar/NavBar';

function App() {

  return (
    <div className="App">
      <NavBar />
      <Clima/>
    </div>
  );
}

export default App;

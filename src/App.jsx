import logo from './logo.svg';
import './App.css';
import { Card } from './components/';
import React from 'react';

function App() {
  return (
    <React.Fragment>
      <div className='bg'>
        <h2 className='title'>Links para as aulas gravadas - Turma 2022 03</h2>
        <Card />
        <Card />
      </div>
    </React.Fragment>
  );
}

export default App;
 
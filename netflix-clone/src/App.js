import './App.css';
import React from 'react';
import Row from './components/Row';

function App() {
  return (
    <div className='App'>
      <h1>
        Hi everybody. I am İlayda Özdemir. Let's build Netflix Clone Front-end
        today
      </h1>
      <Row title='NETFLİX ORIGINALS' />
      <Row title='Trending Now' />
    </div>
  );
}

export default App;

import './App.css';
import React from 'react';
import Row from './components/Row';
import requests from './requests';

function App() {
  return (
    <div className='App'>
      <h1>
        Hi everybody. I am İlayda Özdemir. Let's build Netflix Clone Front-end
        today
      </h1>
      <Row
        title='NETFLİX ORIGINALS'
        fetchUrl={requests.fetchNetflixOriginals}
      />
      <Row title='Trending Now' fetchUrl={requests.fetchTrending} />
    </div>
  );
}

export default App;

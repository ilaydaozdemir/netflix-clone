import React, { useEffect, useState } from 'react';
import axios from '../axios';
import requests from '../requests';

function Banner() {
  const [movie, setMovie] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
    }
    fetchData();
  }, []);
  console.log(movie);
  return (
    <header
      className='banner'
      style={{
        backgroundSize: 'cover',
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundPosition: 'center center',
      }}
    >
      <div className='banner_contents'>
        {/* <<<Background image*/}
        {/* title*/}
        <h1>{movie?.title || movie?.name || movie?.original_name}</h1>
        <div className='banner__buttons'>
          <button className='banner__button'>Play</button>
          <button className='banner__button'>My List</button>
        </div>
        {/* div>2 buttons*/}
        {/* description*/}
      </div>
    </header>
  );
}

export default Banner;

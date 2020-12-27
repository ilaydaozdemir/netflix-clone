import React, { useEffect, useState } from 'react';
import axios from '../axios';
import '../css/Row.css';

const base_url = 'https://image.tmdb.org/t/p/original/';
function Row({ title, fetchUrl }) {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    //if [],run once when the Row loads,and do not run again
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      //https://api.themovie.org/3
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  console.table(movies);
  return (
    <div className='row'>
      <h2>{title}</h2>
      <div className='row__posters'>
        {movies.map(movie => (
          <img
            className='row__poster'
            src={`${base_url}${movie.poster_path}`}
            alt={movie.name}
          />
        ))}
      </div>
    </div>
  );
}

export default Row;

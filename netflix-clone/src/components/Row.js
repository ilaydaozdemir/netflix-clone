import React, { useEffect, useState } from 'react';
import axios from '../axios';
function Row({ title, fetchUrl }) {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    //if [],run once when the Row loads,and do not run again
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      //https://api.themovie.org/3
      console.log(request);
      return request;
    }
    fetchData();
  }, []);
  return (
    <div>
      <h2>{title}</h2>
    </div>
  );
}

export default Row;

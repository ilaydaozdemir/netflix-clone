import React, { useEffect, useState } from 'react';
function Row({ title, fetchUrl }) {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    //if [],run once when the Row loads,and do not run again
  }, [movies]); //if movies chance during run
  return (
    <div>
      <h2>{title}</h2>
    </div>
  );
}

export default Row;

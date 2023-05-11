import React, { useState, useEffect } from 'react';
import ShowCard from './showCard';

const ShowList = () => {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('https://api.tvmaze.com/search/shows?q=all');
      const data = await response.json();
      setShows(data);
      console.log(data);
    }
    fetchData();
  }, []);

  return (
    <div className="shows-container">
      {shows.map((show) => (
        <ShowCard key={show.show.id} show={show} />
      ))}
    </div>
  );
};

export default ShowList;

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const ShowCard = ({ show }) => {
  const [imageURL, setImageURL] = useState('');

  useEffect(() => {
    const fetchImageURL = async () => {
      try {
        const response = await fetch(`https://api.tvmaze.com/shows/${show.show.id}`);
        const data = await response.json();
        setImageURL(data.image ? data.image.medium : null);
      } catch (error) {
        console.log(error);
      }
    };

    fetchImageURL();
  }, [show.show.id]);

  const defaultImageURL = 'https://static.tvmaze.com/images/no-img/no-img-portrait-text.png';

  return (
    <div key={show.show.id} className="show-card">
      <img src={imageURL || defaultImageURL} alt="Show Image" />
      <h2>{show.show.name}</h2>
      <h5>
        Rating: {show.show.rating.average ? show.show.rating.average : 'N/A'}, Language: {show.show.language}
      </h5>
      <div style={{ marginBottom: '2rem' }}>Genres: {show.show.genres.join(', ')}</div>
      <Link to={`/details/${show.show.id}`} style={{ marginBottom: '2rem' }}>
        View Details
      </Link>
    </div>
  );
};

export default ShowCard;



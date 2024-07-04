import React from 'react';
import './MovieCard.css';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

const MovieCard = ({ mov }) => {
    const theme = useTheme();
    const match =useMediaQuery(theme.breakpoints.down('sm'));

  return (
   
   
   !match? <div className="movie-card">
      <img src={`http://image.tmdb.org/t/p/w185${mov.poster_path}`} alt={mov.title} className="movie-poster" />
      <div className="movie-details">
        <h2 className="movie-title">{mov.title}</h2>
        <p className="movie-release-date">{mov.releaseDate}</p>
        <p className="movie-description">{mov.description}</p>
      </div>
    </div>:

<div className="mobile-card">
<img src={`http://image.tmdb.org/t/p/w185${mov.poster_path}`} alt={mov.title} className="mobile-poster" />
<div className="mobile-details">
  <h2 className="mobile-title">{mov.title}</h2>
  <p className="movie-release-date">{mov.releaseDate}</p>
  <p className="movie-description">{mov.description}</p>
</div>
</div>

  );
};

export default MovieCard;

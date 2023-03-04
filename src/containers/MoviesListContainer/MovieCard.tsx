import React, { useContext } from 'react';
import { Movie } from 'api/movies/types';
import { UserContext } from 'providers/UserContext';
import { addToMyMoviesList, PersonalMovie } from 'api/addToMyMoviesList';

import styles from './MovieCard.module.css';
import Favorite from '../../components/Favorite/Favorite';

const MovieCard = ({ movieId, title, releaseDate, voteAverage, posterPath, backdropPath, email }: Movie): JSX.Element => {
  const { isAuthorized } = useContext(UserContext);

  const movie: PersonalMovie | Movie = {
    movieId,
    title,
    releaseDate,
    voteAverage,
    posterPath,
    backdropPath,
    email,
  };

  const handleAddToMyMoviesList = () => {
    addToMyMoviesList(movie as PersonalMovie);
  };

  return (
    <div className={styles.cardContainer}>
      <a href={`/movie/${movieId}`}>
        <img alt={`${title}`} src={posterPath} />
      </a>
      <div className={styles.movieInfo}>
        <div>
          <p className={styles.voteParagraph}>
            <svg
              className={styles.movieCardIcon}
              fill="currentColor"
              height="24"
              role="presentation"
              viewBox="0 0 24 24"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 20.1l5.82 3.682c1.066.675 2.37-.322 2.09-1.584l-1.543-6.926 5.146-4.667c.94-.85.435-2.465-.799-2.567l-6.773-.602L13.29.89a1.38 1.38 0 0 0-2.581 0l-2.65 6.53-6.774.602C.052 8.126-.453 9.74.486 10.59l5.147 4.666-1.542 6.926c-.28 1.262 1.023 2.26 2.09 1.585L12 20.099z"></path>
            </svg>
            <span className={styles.vote}>{voteAverage}</span>
          </p>
          <p>
            <span className={styles.filmTitle}>{title}</span>
          </p>
        </div>
        <p className={styles.releaseDate}>
          {releaseDate} {isAuthorized ? <Favorite movie={movie as PersonalMovie} onClick={handleAddToMyMoviesList} /> : null}
        </p>
      </div>
    </div>
  );
};

export default MovieCard;

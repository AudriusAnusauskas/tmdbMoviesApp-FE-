import React from 'react';

import styles from './MovieCard.module.css';

const MovieCard: React.FunctionComponent = () => {
  return (
    <div className={styles.cardContainer}>
      <a href="/movie/550988">
        <img alt="Free Guy" src="https://image.tmdb.org/t/p/w500/xmbU4JTUm8rsdtn7Y3Fcm30GpeT.jpg" />
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
            <span className={styles.vote}>7.3</span>
          </p>
          <p>
            <span className={styles.filmTitle}>Free Guy</span>
          </p>
          <p className={styles.releaseDate}>2021-08-11</p>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;

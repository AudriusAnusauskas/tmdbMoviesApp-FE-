import { TbHeartPlus } from 'react-icons/tb';
import { addToMyMoviesList } from 'api/addToMyMoviesList';

import { Movie } from '../../api/movies/types';
import styles from './Favorit.module.css';

const Favorite = (props: { movie: Movie; onClick: () => void }) => {
  const handleAddToFavoriteMoviesList = (): void => {
    addToMyMoviesList(props.movie);
  };

  return (
    <span className={styles.button} onClick={handleAddToFavoriteMoviesList}>
      <TbHeartPlus />
    </span>
  );
};

export default Favorite;

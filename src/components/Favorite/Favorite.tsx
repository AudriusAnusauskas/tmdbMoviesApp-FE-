import { TbHeartPlus } from 'react-icons/tb';
import { addToMyMoviesList, PersonalMovie } from 'api/addToMyMoviesList';

import styles from './Favorit.module.css';

interface FavoriteProps {
  movie: PersonalMovie;
  onClick: () => void;
}

const Favorite: React.FC<FavoriteProps> = (props) => {
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

import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { getMovie } from 'api/movies/movies';
import Loading from 'components/Loading/Loading';
import Tag from 'components/Tag/Tag';

import styles from './MovieInfoContainer.module.css';

const MovieInfoContainer: React.FunctionComponent = () => {
  const routeParams = useParams<'movieId'>();
  const { data, isLoading } = useQuery('movie', () => getMovie(routeParams.movieId || ''));
  if (isLoading) return <Loading />;

  return (
    <div className={styles.backdropImage} style={{ backgroundImage: `url(${data?.backdropPath})` }}>
      <div className={styles.backdropCover}>
        <div className={styles.movieInfoWrapper}>
          <section className={styles.movieInfoContainer}>
            <div className={styles.moviePosterWrapper}>
              <img className={styles.moviePoster} src={data?.posterPath} />
            </div>
            <div className={styles.movieDataWrapper}>
              <div className={styles.movieDataHeader}>
                <h2>
                  {data?.title} <span className={styles.movieDataHeaderDate}>({data?.releaseDate})</span>
                </h2>
                <h3>{data?.tagline}</h3>
                <div className={styles.tagList}>
                  {data?.genres.map(({ id, name }) => (
                    <Tag key={id}>{name}</Tag>
                  ))}
                </div>
                <ul className={styles.dataList}>
                  <li>
                    Duration: <strong>{data?.runtime} min</strong>
                  </li>
                  <li>
                    Vote average: <strong>{data?.voteAverage}</strong>
                  </li>
                  <li>
                    Vote count: <strong>{data?.voteCount}</strong>
                  </li>
                  <li>
                    Budget: <strong>${data?.budget.toLocaleString('en-US')}.00</strong>
                  </li>
                  <li>
                    Revenue: <strong>${data?.revenue.toLocaleString('en-US')}.00</strong>
                  </li>
                </ul>
                <div className={styles.descriptionContainer}>
                  <h3>Overview</h3>
                  <span>{data?.overview}</span>
                </div>
                <div className={styles.descriptionContainer}>
                  <h3>Production companies</h3>
                  <span>{data?.productionCompanies.map(({ name }) => name).join(', ')}</span>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default MovieInfoContainer;

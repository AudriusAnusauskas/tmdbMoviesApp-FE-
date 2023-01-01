import { Route, Routes } from 'react-router-dom';
import MoviesListContainer from 'containers/MoviesListContainer/MoviesListContainer';
import MovieInfoContainer from 'containers/MovieInfoContainer/MovieInfoContainer';

import { routes } from './routes';

const MainRouter = (): JSX.Element => {
  return (
    <Routes>
      <Route element={<MovieInfoContainer />} path={routes.Movie} />
      <Route element={<MoviesListContainer />} path={routes.Index} />
      <Route element={<MoviesListContainer />} path={routes.Movies} />
    </Routes>
  );
};

export default MainRouter;

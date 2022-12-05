import { Route, Routes } from 'react-router-dom';
import MoviesListContainer from 'containers/MoviesListContainer/MoviesListContainer';

import { routes } from './routes';

const MainRouter = (): JSX.Element => {
  return (
    <Routes>
      <Route element={<MoviesListContainer />} path={routes.Index} />
      <Route element={<MoviesListContainer />} path={routes.Movies} />
    </Routes>
  );
};

export default MainRouter;

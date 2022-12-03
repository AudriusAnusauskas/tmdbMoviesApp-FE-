import React from 'react';
import { useQuery } from 'react-query';
import { fetchStatus } from 'api/health';
import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';
import MoviesListContainer from 'containers/MoviesListContainer/MoviesListContainer';

const Layout: React.FunctionComponent = () => {
  const { data: healthy } = useQuery('status', fetchStatus);

  return (
    <>
      <Header />
      <MoviesListContainer>
        <p>API Status: {healthy ? 'Is running' : 'Something is wrong!'}</p>
      </MoviesListContainer>
      <Footer />
    </>
  );
};
export default Layout;

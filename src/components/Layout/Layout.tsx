import { useEffect, useState } from 'react';
import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';
import MoviesListContainer from 'containers/MoviesListContainer/MoviesListContainer';
import Loading from 'components/Loading/Loading';

import styles from './Layout.module.css';

const Layout: React.FunctionComponent = () => {
  const [load, setLoad] = useState(false);

  useEffect(() => {
    setLoad(true);
    setTimeout(() => {
      setLoad(false);
    }, 5000);
  }, []);

  return (
    <>
      <Header />
      <main className={styles.main}>{load ? <Loading /> : <MoviesListContainer />}</main>
      <Footer />
    </>
  );
};
export default Layout;

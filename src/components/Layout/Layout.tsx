import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';
import MoviesListContainer from 'containers/MoviesListContainer/MoviesListContainer';

import styles from './Layout.module.css';

const Layout: React.FunctionComponent = () => {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <MoviesListContainer />
      </main>
      <Footer />
    </>
  );
};
export default Layout;

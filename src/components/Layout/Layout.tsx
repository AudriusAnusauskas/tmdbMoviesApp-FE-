import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';
// import MoviesListContainer from 'containers/MoviesListContainer/MoviesListContainer';
// import MovieInfoContainer from 'containers/MovieInfoContainer/MovieInfoContainer';
import { ReactNode } from 'react';

import styles from './Layout.module.css';

type LayoutProps = {
  children: ReactNode;
};

const Layout: React.FunctionComponent<LayoutProps> = ({ children }: LayoutProps) => {
  return (
    <>
      <Header />
      <main className={styles.main}>{children}</main>
      <Footer />
    </>
  );
};
export default Layout;

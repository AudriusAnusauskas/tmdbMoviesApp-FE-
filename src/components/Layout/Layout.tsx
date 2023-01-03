import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';

import styles from './Layout.module.css';

const Layout: React.FunctionComponent = ({ children }) => {
  return (
    <>
      <Header />
      <main className={styles.main}>{children}</main>
      <Footer />
    </>
  );
};
export default Layout;

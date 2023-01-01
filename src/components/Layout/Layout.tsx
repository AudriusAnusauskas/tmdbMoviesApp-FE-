import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';
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

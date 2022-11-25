import React, { ReactNode } from 'react';
import { MyMoviesLogo } from 'components/Icons';

import styles from './Header.module.css';

interface Props {
  children?: ReactNode;
}

const Header: React.FunctionComponent<Props> = ({ ...props }: Props) => {
  return (
    <header className={styles.header} {...props}>
      <MyMoviesLogo className={styles.icon} />
    </header>
  );
};

export default Header;

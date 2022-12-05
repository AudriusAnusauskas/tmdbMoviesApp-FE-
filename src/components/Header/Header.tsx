import React, { ReactNode, useState, useEffect } from 'react';
import { MyMoviesLogo } from 'components/Icons';
import Sidebar from 'components/Sidebar/Sidebar';
import HamburgerButton from 'components/HamburgerButton/HamburgerButton';
import NavigationLink from 'components/NavigationLink/NavigationLink';
import useMediaQuery from 'Hooks/useMediaQuery';

import styles from './Header.module.css';

interface Props {
  children?: ReactNode;
}

const Header: React.FunctionComponent<Props> = ({ ...props }: Props) => {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);
  const { matches } = useMediaQuery({ matchQuery: '(max-width: 768px)' });

  useEffect(() => {
    if (matches) {
      setIsSidebarVisible(false);
    }
  }, [matches]);

  const handleButtonClick = () => {
    setIsSidebarVisible((isSidebarVisible) => !isSidebarVisible);
  };

  const closeSidebar = () => {
    setIsSidebarVisible(false);
  };

  return (
    <header className={styles.header} {...props}>
      <MyMoviesLogo className={styles.icon} />
      <>
        {matches ? <HamburgerButton isActive={isSidebarVisible} onClick={handleButtonClick} /> : <NavigationLink />}
        {isSidebarVisible && (
          <Sidebar onBackdropClick={closeSidebar}>
            <NavigationLink />
          </Sidebar>
        )}
      </>
    </header>
  );
};

export default Header;

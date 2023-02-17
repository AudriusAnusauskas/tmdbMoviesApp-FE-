import React, { ReactNode, useState, useEffect } from 'react';
import { MyMoviesLogo } from 'components/Icons';
import Sidebar from 'components/Sidebar/Sidebar';
import HamburgerButton from 'components/HamburgerButton/HamburgerButton';
import NavigationLink from 'components/NavigationLink/NavigationLink';
import useMediaQuery from 'Hooks/useMediaQuery';

import styles from './Header.module.css';
import Modal from '../Modal/Modal';

interface Props {
  children?: ReactNode;
}

const Header: React.FunctionComponent<Props> = ({ ...props }: Props) => {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const { matches } = useMediaQuery({ matchQuery: '(max-width: 768px)' });

  useEffect(() => {
    if (matches) {
      setIsSidebarVisible(false);
    }
  }, [matches]);

  const handleButtonClick = () => {
    setIsSidebarVisible((isSidebarVisible) => !isSidebarVisible);
  };

  const handleButtonClickModal = () => {
    setIsModalVisible((isModalVisible) => !isModalVisible);
  };

  const closeSidebar = () => {
    setIsSidebarVisible(false);
  };

  return (
    <header className={styles.header} {...props}>
      <MyMoviesLogo className={styles.icon} />
      <nav>
        {matches ? (
          <HamburgerButton isActive={isSidebarVisible} onClick={handleButtonClick} />
        ) : (
          <ul className={styles.navigationUL}>
            <li className={styles.navigationLI}>
              <NavigationLink />
            </li>
            <li className={styles.navigationLI}>
              <button className={styles.modalSigninButton} onClick={handleButtonClickModal}>
                Sign-in/up
              </button>
            </li>
          </ul>
        )}
        {isSidebarVisible && (
          <Sidebar onBackdropClick={closeSidebar}>
            <ul className={styles.navigationULSidebar}>
              <li className={styles.navigationLI}>
                <NavigationLink />
              </li>
              <li className={styles.navigationLI}>
                <button className={styles.modalSigninButton} onClick={handleButtonClickModal}>
                  Sign-in/up
                </button>
              </li>
            </ul>
          </Sidebar>
        )}
        {isModalVisible && <Modal handleClose={handleButtonClickModal}>modal</Modal>}
      </nav>
    </header>
  );
};

export default Header;

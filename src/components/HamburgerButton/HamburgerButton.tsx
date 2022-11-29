import React from 'react';
import classNames from 'classnames';

import styles from './HamburgerButton.module.css';

interface Props {
  isActive: boolean;
  onClick: () => void;
}

const HamburgerButton = ({ isActive, onClick }: Props): JSX.Element => {
  return (
    <div
      className={classNames(styles.hamburger, {
        [styles.active]: isActive,
      })}
      onClick={onClick}
    >
      <span className={styles.bar}></span>
      <span className={styles.bar}></span>
      <span className={styles.bar}></span>
    </div>
  );
};

export default HamburgerButton;

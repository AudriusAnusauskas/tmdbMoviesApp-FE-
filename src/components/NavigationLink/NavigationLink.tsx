import classNames from 'classnames';
import { NavLink } from 'react-router-dom';

import styles from './NavigationLink.module.css'; // eslint-disable-line

const NavigationLink = (): JSX.Element => {
  return (
    <NavLink
      className={({ isActive }) =>
        classNames(styles.navContainer, {
          [styles.active]: isActive,
        })
      }
      to="/movies"
    >
      Movies
    </NavLink>
  );
};

export default NavigationLink;

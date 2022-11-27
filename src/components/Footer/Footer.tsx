import React, { ReactNode } from 'react';

import styles from './Footer.module.css';

interface Props {
  children?: ReactNode;
}

const Footer: React.FunctionComponent<Props> = ({ ...props }: Props) => {
  return (
    <footer className={styles.footer} {...props}>
      © All rights reserved.
    </footer>
  );
};

export default Footer;

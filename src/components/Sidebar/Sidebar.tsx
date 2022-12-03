import { MouseEvent, ReactNode } from 'react';

import styles from './Sidebar.module.css';

interface Props {
  children: ReactNode;
  onBackdropClick: () => void;
}

const Sidebar: React.FunctionComponent<Props> = ({ children, onBackdropClick }: Props) => {
  const onSidebarClick = (event: MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
  };
  return (
    <div className={styles.backdrop} onClick={onBackdropClick}>
      <div className={styles.takeOver} onClick={onSidebarClick}>
        {children}
      </div>
    </div>
  );
};

export default Sidebar;

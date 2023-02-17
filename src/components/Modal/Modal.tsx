import styles from './Modal.module.css';
import SignUpModal from './SignUpModal';

type ModalProps = {
  handleClose: () => void;
};

const Modal: React.FC<ModalProps> = (props: ModalProps) => {
  const { handleClose } = props;
  return (
    <div className={styles.backdrop}>
      <div className={styles.modal}>
        <header className={styles.modalHeader}>Please sign-up</header>
        <main>
          <SignUpModal />
        </main>
        <footer className={styles.modalFooter}>
          <button className={styles.modalCancelButton} onClick={handleClose}>
            Cancel
          </button>
          <button className={styles.modalSigninuplButton}>Sign-up</button>
        </footer>
      </div>
    </div>
  );
};

export default Modal;

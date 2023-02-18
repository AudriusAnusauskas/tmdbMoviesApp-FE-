import styles from './Modal.module.css';
import SignUpModal from './SignUpModal';
import { SignUpFormValues } from '../../api/signUp';

type ModalProps = {
  handleClose: () => void;
  onSubmit: (values: SignUpFormValues) => void;
};

const Modal: React.FC<ModalProps> = (props: ModalProps) => {
  const { handleClose, onSubmit } = props;
  return (
    <div className={styles.backdrop}>
      <div className={styles.modal}>
        <header className={styles.modalHeader}>Please sign-up</header>
        <main>
          <SignUpModal onSubmit={onSubmit} />
        </main>
        <footer className={styles.modalFooter}>
          <button className={styles.modalCancelButton} onClick={handleClose}>
            Cancel
          </button>
          <button className={styles.modalSigninuplButton} type="button">
            Sign-up
          </button>
        </footer>
      </div>
    </div>
  );
};

export default Modal;

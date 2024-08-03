import React from 'react';
import { ToastContext } from '../ToastProvider';
import Toast from '../Toast';
import styles from './ToastShelf.module.css';

function ToastShelf() {
  const { activeToasts } = React.useContext(ToastContext);

  if (!activeToasts) {
    return null;
  }

  return (
    <div
      className={styles.wrapper}
      aria-live="assertive"
      aria-label="Notification"
      role="region"
    >
      {activeToasts.map((activeToast) => (
        <div key={activeToast.id} className={styles.toastWrapper}>
          <Toast id={activeToast.id} variant={activeToast.variant}>{activeToast.message}</Toast>
        </div>
      ))}
    </div>
  );
}

export default ToastShelf;

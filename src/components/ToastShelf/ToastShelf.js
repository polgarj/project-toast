import React from 'react';
import { ToastContext } from '../ToastProvider';
import Toast from '../Toast';
import styles from './ToastShelf.module.css';

function ToastShelf() {
  const { activeToasts } = React.useContext(ToastContext);

  return (
    <ol className={styles.wrapper}>
      {activeToasts.map((activeToast) => (
        <li key={activeToast.id} className={styles.toastWrapper}>
          <Toast id={activeToast.id} variant={activeToast.variant}>{activeToast.message}</Toast>
        </li>
      ))}
    </ol>
  );
}

export default ToastShelf;

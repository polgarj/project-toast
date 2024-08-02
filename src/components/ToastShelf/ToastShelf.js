import React from 'react';

import Toast from '../Toast';
import styles from './ToastShelf.module.css';

function ToastShelf({ activeToasts, handleDismiss }) {
  return (
    <ol className={styles.wrapper}>
      {activeToasts.map((activeToast) => {
        if (!activeToast || !activeToast.variant || !activeToast.message) {
          return null;
        }
        return (
          <li key={activeToast.id} className={styles.toastWrapper}>
            <Toast handleDismiss={handleDismiss} id={activeToast.id} variant={activeToast.variant}>
              {activeToast.message}
            </Toast>
          </li>
        );
      })}
    </ol>
  );
}

export default ToastShelf;

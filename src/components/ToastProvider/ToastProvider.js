import React from 'react';
import useKeydown from '../../hooks/useKeydown';

export const ToastContext = React.createContext();

function ToastProvider({children}) {
  const [activeToasts, setActiveToasts] = React.useState([]);

  const handleEscape = React.useCallback(()=>{
    setActiveToasts([]);
  })

  useKeydown('Escape', handleEscape);

  function createToast(message, variant) {
    const nextToasts = [
      ...activeToasts,
      { id: crypto.randomUUID(),
        message,
        variant
      }
    ];

    setActiveToasts(nextToasts);
  }

  function dissmissToast(id) {
    const nextToasts = activeToasts.filter((toast) => {
      return toast.id !== id;
    });

    setActiveToasts(nextToasts);
  };

  return <ToastContext.Provider value={{activeToasts, createToast, dissmissToast}}>{children}</ToastContext.Provider>;
}

export default ToastProvider;

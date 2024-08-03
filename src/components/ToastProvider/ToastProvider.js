import React from 'react';

export const ToastContext = React.createContext();

function ToastProvider({children}) {
  const [activeToasts, setActiveToasts] = React.useState([]);

  React.useEffect(() => {
    function handleKeyDown(event) {
      if (event.code === 'Escape') {
        setActiveToasts([]);
      }
    }

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

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

import React from "react";
import useKeyDown from "../../hooks/useEscapeKey";

export const ToastContext = React.createContext();

function ToastProvider({ children }) {
  const [toasts, setToasts] = React.useState([]);
	const handleEscape = React.useCallback(() => setToasts([]), []);
	useKeyDown('Escape', handleEscape);

  const createToast = (message, variant) => {
    const newToasts = [...toasts];
    const toast = {
      id: crypto.randomUUID(),
      variant: variant,
      message: message,
    };
    newToasts.push(toast);
    setToasts(newToasts);
  };

  const removeToast = (id) => {
    const filteredToasts = toasts.filter((toast) => toast.id !== id);
    setToasts(filteredToasts);
  };

  return (
    <ToastContext.Provider value={{ toasts, createToast, removeToast }}>
      {children}
    </ToastContext.Provider>
  );
}

export default ToastProvider;

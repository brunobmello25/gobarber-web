import React, { createContext, useContext, useCallback } from 'react';
import { ToastsContainer } from 'components';

interface IAuthContext {
  addToast(): void;
  removeToast(): void;
}

const ToastContext = createContext<IAuthContext>({} as IAuthContext);

const ToastProvider: React.FC = ({ children }) => {
  const addToast = useCallback(() => {
    console.log('Add Toast');
  }, []);

  const removeToast = useCallback(() => {
    console.log('Remove Toast');
  }, []);

  return (
    <ToastContext.Provider value={{ addToast, removeToast }}>
      {children}
      <ToastsContainer />
    </ToastContext.Provider>
  );
};

function useToast(): IAuthContext {
  const context = useContext(ToastContext);

  if (!context) throw new Error('useToast must be used within a ToastProvider');

  return context;
}

export { ToastProvider, useToast };

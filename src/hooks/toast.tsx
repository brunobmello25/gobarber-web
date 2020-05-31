import React, { createContext, useContext, useCallback, useState } from 'react';
import { ToastsContainer } from 'components';
import { uuid } from 'uuidv4';

interface IAuthContext {
  addToast(message: Omit<ToastMessage, 'id'>): void;
  removeToast(): void;
}

export interface ToastMessage {
  id: string;
  type?: 'success' | 'error' | 'info';
  title: string;
  description?: string;
}

const ToastContext = createContext<IAuthContext>({} as IAuthContext);

const ToastProvider: React.FC = ({ children }) => {
  const [messages, setMessages] = useState<ToastMessage[]>([]);

  const addToast = useCallback((message: Omit<ToastMessage, 'id'>) => {
    const id = uuid();

    const toast = { id, ...message };

    setMessages(state => [...state, toast]);
  }, []);

  const removeToast = useCallback(() => {
    console.log('Remove Toast');
  }, []);

  return (
    <ToastContext.Provider value={{ addToast, removeToast }}>
      {children}
      <ToastsContainer messages={messages} />
    </ToastContext.Provider>
  );
};

function useToast(): IAuthContext {
  const context = useContext(ToastContext);

  if (!context) throw new Error('useToast must be used within a ToastProvider');

  return context;
}

export { ToastProvider, useToast };

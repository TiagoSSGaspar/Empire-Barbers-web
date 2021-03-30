import React, {createContext, useCallback, useContext, useState} from 'react';
import { v4 as uuid } from 'uuid';

import ToastContainer from '../components/ToastContainer';

export interface ToastMessage {
  id: string;
  type?: 'success' | 'error'| 'info';
  title: string;
  description?: string;
}

interface ToastContextdata {
  addToast(messages:Omit<ToastMessage, 'id'>): void
  removeToast(id: string): void
}

const ToastContext = createContext<ToastContextdata>({} as ToastContextdata);

const ToastProvider: React.FC = ({children}) => {
  const [messages, setMassages] = useState<ToastMessage[]>([]);

  const addToast = useCallback(({type, title, description}: Omit<ToastMessage, 'id'>) => {
    const id = uuid();

    const toast = {
      id,
      type,
      title,
      description
    }

    setMassages(oldMessages => [...messages, toast]);

  }, []);

  const removeToast = useCallback((id: string) => {
    setMassages(state => state.filter(message => message.id !== id) )
  }, []);

  return (
    <ToastContext.Provider value={{addToast, removeToast}}>
      {children}
      <ToastContainer messages={messages} />
    </ToastContext.Provider>
  );
}

function useToast(): ToastContextdata {
  const context = useContext(ToastContext);

  if(!context) {
    throw new Error('useToast most be used within a ToastProvider ')
  }

  return context;
}

export {ToastProvider, useToast}

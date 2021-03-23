import React, {createContext, useCallback, useContext} from 'react';

import ToastContainer from '../components/ToastContainer';

interface ToastContextdata {
  addToast(): void
  removeToast(): void
}

const ToastContext = createContext<ToastContextdata>({} as ToastContextdata);

const ToastProvider: React.FC = ({children}) => {
  const addToast = useCallback(() => {}, []);

  const removeToast = useCallback(() => {}, []);

  return (
    <ToastContext.Provider value={{addToast, removeToast}}>
      {children}
      <ToastContainer/>
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

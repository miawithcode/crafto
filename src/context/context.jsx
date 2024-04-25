'use client';

import { createContext, useContext, useState } from 'react';

export const appContext = createContext();

export const AppProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  }

  const closeModal = () => {
    setIsOpen(false);
  }

  return (
    <appContext.Provider value={{ isOpen, openModal, closeModal }}>
      {children}
    </appContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(appContext);
};

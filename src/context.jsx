import React, { createContext, useContext } from 'react';

const MyContext = createContext(null);

const MyProvider = ({ children }) => {
  const value = {}; 

  return (
    <MyContext.Provider value={value}>
      {children}
    </MyContext.Provider>
  );
};

const useMyContext = () => {
  const context = useContext(MyContext);
  if (context === null) {
    throw new Error('useMyContext must be used within a MyProvider');
  }
  return context;
};

export { MyProvider, useMyContext };

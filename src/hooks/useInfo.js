import React, { useState, useCallback, useContext } from 'react';

const InfoContext = React.createContext({});

const InfoProvider = ({ children }) => {
  const [info, setInfo] = useState(null);

  const dispatchInfo = useCallback((message) => {
    setInfo(message);
    setTimeout(() => {
      setInfo('');
    }, 3000);
  }, []);

  return (
    <InfoContext.Provider value={{ info, dispatchInfo }}>
      {children}
    </InfoContext.Provider>
  );
};

export const useInfo = () => {
  const infoContext = useContext(InfoContext);
  return infoContext;
};

export default InfoProvider;

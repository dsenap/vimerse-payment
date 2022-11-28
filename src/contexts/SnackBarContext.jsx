import React, { createContext, useContext } from 'react';

const SnackBarStateContext = createContext(null);

const SnackBarProvider = ({ children }) => {
  const [snackOpen, setSnackOpen] = React.useState(false);
  const [message, setMessage] = React.useState('');

  const openSnackBarHandler = () => {
    setSnackOpen(true);
  };

  const closeSnackBarHandler = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setSnackOpen(false);
  };

  const setMessageHandler = (text) => {
    setMessage(text);
  };

  return (
    <SnackBarStateContext.Provider
      value={{
        snackOpen: snackOpen,
        openSnackBar: openSnackBarHandler,
        closeSnackBar: closeSnackBarHandler,
        messageSnackBar: message,
        setMessageSnackBar: setMessageHandler,
      }}
    >
      {children}
    </SnackBarStateContext.Provider>
  );
};

const useSnackBarState = () => {
  const context = useContext(SnackBarStateContext);

  if (context === undefined) {
    throw new Error('useSnackBarState must be used within a SnackBarStateContext');
  }

  return context;
};

export { SnackBarProvider, useSnackBarState };

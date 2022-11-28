import React from 'react';
import MuiAlert from '@material-ui/lab/Alert';
import { Snackbar } from '@material-ui/core';

import { useSnackBarState } from '../../contexts/SnackBarContext';

const Alert = (props) => <MuiAlert elevation={6} variant="filled" {...props} />;

const SnackBarBox = () => {
  const { snackOpen, closeSnackBar, messageSnackBar } = useSnackBarState();

  return (
    <Snackbar open={snackOpen} autoHideDuration={2500} onClose={closeSnackBar} className="snackbar">
      <Alert onClose={closeSnackBar}>{messageSnackBar}</Alert>
    </Snackbar>
  );
};

export default SnackBarBox;

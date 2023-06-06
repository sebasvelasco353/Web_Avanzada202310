import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useEffect } from 'react';

export default function Alert({ title, state, message, onConfirmation}) {
  const [open, setOpen] = React.useState(false);

  const handleClose = () => {
    setOpen(false);
    onConfirmation(false);
  };

  const handleAcept = () => {
    onConfirmation(true)
    setOpen(false)
  }

  useEffect(()=>{
    setOpen(state);
  },[state]);

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {message}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancelar</Button>
          <Button onClick={handleAcept} autoFocus>Aceptar</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
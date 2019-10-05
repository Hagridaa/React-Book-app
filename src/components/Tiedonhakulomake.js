import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';
import { Card } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));

export default function DialogSelect() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    open: false
  });

  const handleChange = name => event => {
    setState({ ...state, [name]: Number(event.target.value) });
  };

  const handleClickOpen = () => {
    setState({ ...state, open: true });
  };

  const handleClose = () => {
    setState({ ...state, open: false });
  };

  return (
    <Card style={ {textAlign: "center" , marginLeft:100, marginRight:100}}>
      <Button  onClick={handleClickOpen}>Hae uutta luettavaa tästä</Button>
      <Dialog disableBackdropClick disableEscapeKeyDown open={state.open} onClose={handleClose}>
        <DialogTitle>Anna kirjailijan nimi</DialogTitle>

        <DialogContent>
          <form className={classes.container}>
            <FormControl className={classes.formControl}>
              <TextField name="nimi"label='kirjailijan nimi'>
                  
                  
              </TextField>
          
            </FormControl>
          </form>
        </DialogContent>

        <DialogActions>
          <Button onClick={handleClose} color="secondary">
            Ok
          </Button>
          <Button onClick={handleClose} color="primary">
          Peruuta
          </Button>
        </DialogActions>
      </Dialog>
    </Card>
  );
}
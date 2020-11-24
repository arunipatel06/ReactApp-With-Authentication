import React, { useState, useEffect, Fragment } from 'react';
import {
  IconButton,
  Button,
  Grid,
  TextField,
  InputAdornment,
  Dialog,
  DialogTitle,
  DialogContent,
  CircularProgress,
  Divider,
  Modal,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Clear } from '@material-ui/icons';

//images
import LoginForm from './assests/LoginForm.jpg';
import SignUpForm from './assests/SignUpForm.jpg';

//icons
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import EmailIcon from '@material-ui/icons/Email';

const useStyles = makeStyles((theme) => ({
  root: {
    background: '#FAFAFA',
  },
  body: {
    position: 'relative',
    width: '365px',
    backgroundColor: theme.palette.background.default,
    margin: '100px auto 0px',
    outline: 0,
    overflowY: 'hidden',
    [theme.breakpoints.up('md')]: {
      width: '900px',
    },
  },
  formContainer: {
    overflow: 'hidden',
    padding: '10px 50px',
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '20px',
  },
  title: {
    fontFamily: '"Mada", sans-serif',
    fontWeight: 600,
    fontSize: '36px',
    lineHeight: '51px',
    color: '#1b242f',
  },
  left: {
    textAlign: 'left',
  },
  textTitle: {
    fontFamily: '"Mada", sans-serif',
    fontWeight: '600',
    fontSize: '18px',
    lineHeight: '28px',
    margin: '0px 0px 10px 0px',
    color: '#1b242f',
  },
  TextField: {
    fontFamily: 'sans-serif',
    width: '100%',
  },
  LoginImage: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'block',
    },
  },
}));

const SignUp = ({ openSignUp, setOpenSignUp }) => {
  const classes = useStyles();
  const [state, setState] = useState({
    username: '',
    emailAddress: '',
    password: '',
  });

  const [showDialog, setShowDialog] = useState(false);

  const submitSignUp = () => {
    setShowDialog(true);
    setState({ username: '', password: '' });
  };

  const handleChange = (name) => (event) => {
    setState({ ...state, [name]: event.target.value });
  };

  const modal1 = (
    <Modal open={openSignUp} onClose={() => setOpenSignUp(false)}>
      <div className={classes.body}>
        <IconButton
          onClick={() => setOpenSignUp(false)}
          style={{ position: 'absolute', top: '8px', right: '8px' }}
        >
          <Clear />
        </IconButton>
        <Grid container>
          <Grid item xs={12} md={6}>
            <div className={classes.header}>
              <div className={classes.title}>Log In</div>
            </div>
            <Divider />
            <div className={classes.formContainer}>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  submitSignUp();
                }}
              >
                <Grid container spacing={1} style={{ textAlign: 'center', overflow: 'hidden' }}>
                  <Grid className={classes.left} item xs={12}>
                    <div className={classes.textTitle} style={{ marginTop: '10px' }}>
                      Username
                    </div>
                    <TextField
                      onChange={handleChange('username')}
                      value={state.username}
                      className={classes.TextField}
                      placeholder="Please enter your username"
                      variant="outlined"
                    />
                  </Grid>
                  <Grid container spacing={1} style={{ textAlign: 'center', overflow: 'hidden' }}>
                    <Grid className={classes.left} item xs={12}>
                      <div className={classes.textTitle} style={{ marginTop: '10px' }}>
                        Email Address
                      </div>
                      <TextField
                        onChange={handleChange('emailAddress')}
                        value={state.emailAddress}
                        className={classes.TextField}
                        placeholder="Please enter your email address"
                        variant="outlined"
                      />
                    </Grid>
                  </Grid>
                  <Grid className={classes.left} item xs={12}>
                    <div className={classes.textTitle}>Password</div>
                    <TextField
                      className={classes.TextField}
                      onChange={handleChange('password')}
                      value={state.emailAddress}
                      placeholder="Please enter password"
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item xs={12} style={{ marginTop: '15px' }}>
                    <Button
                      type="submit"
                      variant="contained"
                      className={classes.button}
                      endIcon={<ArrowRightAltIcon />}
                    >
                      Log In
                    </Button>
                  </Grid>
                </Grid>
              </form>
            </div>
          </Grid>

          <Grid item xs={12} md={6} className={classes.SignUpImage}>
            <img alt="Revre" src={SignUpForm} style={{ height: '100%', width: '100%' }} />
          </Grid>
        </Grid>
      </div>
    </Modal>
  );

  const progress = (
    <Dialog
      onClose={() => {
        setShowDialog(false);
      }}
      openLogin={showDialog}
    ></Dialog>
  );
  return (
    <Fragment>
      {modal1}
      {progress}
    </Fragment>
  );
};

export default SignUp;

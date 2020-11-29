import React, { useState, useEffect, Fragment } from 'react';
import { gql, useMutation } from '@apollo/client';

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
  Typography,
} from '@material-ui/core';
import { Clear } from '@material-ui/icons';
import { useStyles } from './JssStyleSheets/JssSignUp';
//images

//icons
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import CancelIcon from '@material-ui/icons/Cancel';

const ADDUSER = gql`
  mutation createUser(
    $firstName: String!
    $lastName: String!
    $emailAddress: String!
    $password: String!
  ) {
    createUser(
      firstName: $firstName
      lastName: $lastName
      emailAddress: $emailAddress
      password: $password
    ) {
      accountId
    }
  }
`;

const SignUp = ({ openSignUp, setOpenSignUp, setOpenLogin }) => {
  const classes = useStyles();
  const [state, setState] = useState({
    firstName: '',
    lastName: '',
    emailAddress: '',
    password: '',
  });

  const [addUserInfo, setUserInfo] = useState('');
  const [showDialog, setShowDialog] = useState(false);
  const [formLoading, setFormLoading] = useState(true);
  const [formSuccess, setFormSuccess] = useState(true);

  const [runQuery, { loading, error, data }] = useMutation(ADDUSER, {
    variables: {
      firstName: addUserInfo.firstName,
      lastName: addUserInfo.lastName,
      emailAddress: addUserInfo.emailAddress,
      password: addUserInfo.password,
    },
  });
  if (data) console.log('dataa', data);

  useEffect(() => {
    if (loading) setFormLoading(true);
    if (error) return;
    if (data) {
      setFormLoading(false);
      if (data?.createUser?.accountId) {
        setFormSuccess(true);
        setOpenSignUp(false);
        setTimeout(() => {
          setShowDialog(false);
          setOpenLogin(true);
        }, 2000);
      } else setFormSuccess(false);
    }
  }, [loading, error, data]);

  useEffect(() => {
    if (Object.keys(addUserInfo).length === 0) return;
    console.log('addUserInfo', addUserInfo);
    runQuery();
  }, [addUserInfo]);

  const submitSignUp = () => {
    setShowDialog(true);

    setUserInfo({
      firstName: state.firstName,
      lastName: state.lastName,
      emailAddress: state.emailAddress,
      password: state.password,
    });
    setState({ firstName: '', lastName: '', emailAddress: '', password: '' });
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
              <div className={classes.title}>Sign Up</div>
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
                      First Name
                    </div>
                    <TextField
                      onChange={handleChange('firstName')}
                      value={state.firstName}
                      className={classes.TextField}
                      placeholder="Please enter your firstname"
                      variant="outlined"
                    />
                  </Grid>
                </Grid>
                <Grid container spacing={1} style={{ textAlign: 'center', overflow: 'hidden' }}>
                  <Grid className={classes.left} item xs={12}>
                    <div className={classes.textTitle} style={{ marginTop: '10px' }}>
                      Last Name
                    </div>
                    <TextField
                      onChange={handleChange('lastName')}
                      value={state.lastName}
                      className={classes.TextField}
                      placeholder="Please enter your lastname"
                      variant="outlined"
                    />
                  </Grid>
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
                      placeholder="Please enter your Email Address"
                      variant="outlined"
                    />
                  </Grid>

                  <Grid className={classes.left} item xs={12}>
                    <div className={classes.textTitle}>Password</div>
                    <TextField
                      className={classes.TextField}
                      onChange={handleChange('password')}
                      value={state.password}
                      placeholder="Please enter password"
                      variant="outlined"
                      type="password"
                    />
                  </Grid>
                  <Grid item xs={12} style={{ marginTop: '15px' }}>
                    <Button
                      type="submit"
                      variant="contained"
                      className={classes.button}
                      endIcon={<ArrowRightAltIcon />}
                    >
                      Sign Up
                    </Button>
                  </Grid>
                  <div className={classes.loginText}>
                    Already a customer?
                    <Button
                      className={classes.loginButton}
                      onClick={() => {
                        setOpenSignUp(false);
                        setOpenLogin(true);
                      }}
                    >
                      Log In
                    </Button>
                  </div>
                </Grid>
              </form>
            </div>
          </Grid>

          <Grid item xs={12} md={6} className={classes.SignUpImage}>
            <section>
              <Typography className={classes.imageTitle}>Hello There!</Typography>
              <Typography className={classes.imageText}>
                Enter your details and start journey with us.
              </Typography>
            </section>
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
      open={showDialog}
      aria-labelledby="responsive-dialog-title"
    >
      <DialogTitle id="responsive-dialog-title">
        {formLoading
          ? 'Processing... '
          : formSuccess
          ? 'Account created successfully. Please Login '
          : 'Something went wrong..'}
      </DialogTitle>
      <DialogContent>
        <div style={{ textAlign: 'center', margin: '10px auto' }}>
          {formLoading ? (
            <CircularProgress />
          ) : formSuccess ? (
            <CheckCircleOutlineIcon style={{ fontSize: '50px', color: 'green' }} />
          ) : (
            <CancelIcon style={{ fontSize: '50px', color: 'red' }} />
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
  return (
    <Fragment>
      {modal1}
      {progress}
    </Fragment>
  );
};

export default SignUp;

import React, { useState, useEffect, Fragment } from 'react';
import { gql, useLazyQuery } from '@apollo/client';
import {
  IconButton,
  Button,
  Grid,
  TextField,
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

//icons
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import CancelIcon from '@material-ui/icons/Cancel';

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

const ISLOGIN = gql`
  query signIn($emailAddress: String!, $password: String!) {
    signIn(emailAddress: $emailAddress, password: $password) {
      isMatch
    }
  }
`;

const Login = ({ openLogin, setOpenLogin }) => {
  const classes = useStyles();
  const [state, setState] = useState({
    emailAddress: '',
    password: '',
  });
  const [LoginInfo, setLoginInfo] = useState('');
  const [showDialog, setShowDialog] = useState(false);
  const [formLoading, setFormLoading] = useState(true);
  const [formSuccess, setFormSuccess] = useState(true);

  const [runQuery, { loading, error, data }] = useLazyQuery(ISLOGIN, {
    variables: {
      emailAddress: LoginInfo.emailAddress,
      password: LoginInfo.password,
    },
  });
  if (data) console.log('Data: ', data);

  useEffect(() => {
    if (loading) setFormLoading(true);
    if (error) return;
    if (data) {
      setFormLoading(false);
      if (data?.signIn?.isMatch) setFormSuccess(true);
      else setFormSuccess(false);
    }
  }, [loading, error, data]);

  useEffect(() => {
    if (Object.keys(LoginInfo).length === 0) return;
    console.log('loginInfo', LoginInfo);
    runQuery();
  }, [LoginInfo]);

  const submitLogin = () => {
    setShowDialog(true);
    setLoginInfo({
      emailAddress: state.emailAddress,
      password: state.password,
    });
    setState({
      emailAddress: '',
      password: '',
    });
  };

  const handleChange = (name) => (event) => {
    setState({ ...state, [name]: event.target.value });
  };

  const modal1 = (
    <Modal open={openLogin} onClose={() => setOpenLogin(false)}>
      <div className={classes.body}>
        <IconButton
          onClick={() => setOpenLogin(false)}
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
                  submitLogin();
                }}
              >
                <Grid container spacing={1} style={{ textAlign: 'center', overflow: 'hidden' }}>
                  <Grid className={classes.left} item xs={12}>
                    <div className={classes.textTitle} style={{ marginTop: '10px' }}>
                      Email Address
                    </div>
                    <TextField
                      onChange={handleChange('emailAddress')}
                      value={state.emailAddress}
                      className={classes.TextField}
                      placeholder="Please enter your emailaddress"
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
                      Log In
                    </Button>
                  </Grid>
                </Grid>
              </form>
            </div>
          </Grid>

          <Grid item xs={12} md={6} className={classes.LoginImage}>
            <img alt="Revre" src={LoginForm} style={{ height: '100%', width: '100%' }} />
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
      <DialogTitle id="responsive-dialog-title">{'Processing... '}</DialogTitle>
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

export default Login;

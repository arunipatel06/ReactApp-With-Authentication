import React, { useState, useEffect, useRef, Fragment } from 'react';
import { Button, IconButton } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Login from './Login';
import SignUp from './SignUp';

const useStyles = makeStyles((theme) => ({
  navbar: {
    width: '100%',
    height: '50px',
    position: 'fixed',
    left: 0,
    top: 0,
    // bottom: 0,
    right: 0,
    bottom: 'auto',
    textAlign: 'left',
    transition: '0.25s',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    zIndex: 1000,
    backgroundColor: '#394c4e',
    borderBottom: '2px solid #b9a61c',
    boxShadow: '4px 4px 10px 0 rgba(0, 0, 0, 0.3)',
  },
  button: {
    transition: '0.5s',
    fontFamily: '"Mada", sans-serif',
    color: 'white',
    fontSize: '20px',
    fontWeight: 'normal',
    margin: '0px 20px',
    '&:hover': {
      color: '#e31b6d',
    },
  },
  buttonContainer: {
    height: '50px',
    float: 'left',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: '25px',
  },
  wContainer: {
    height: '100%',
    // margin: '0 auto',
    display: 'flex',
    justifyContent: 'right',
    alignItems: 'right',
    '&:after': {
      content: '',
      display: 'block',
      clear: 'both',
    },
  },
}));
const NewNavbar = (props) => {
  const classes = useStyles();
  const [openLogin, setOpenLogin] = useState(false);
  const [openSignUp, setOpenSignUp] = useState(false);

  return (
    <Fragment>
      <div className={classes.navbar}>
        <div className={classes.wContainer}>
          <div className={classes.buttonContainer}>
            <Button className={classes.button} onClick={() => setOpenLogin(true)}>
              Log IN
            </Button>
            <Button className={classes.button} onClick={() => setOpenSignUp(true)}>
              Sign UP
            </Button>
          </div>
        </div>
      </div>
      <Login openLogin={openLogin} setOpenLogin={setOpenLogin} />
      <SignUp openSignUp={openSignUp} setOpenSignUp={setOpenSignUp} />
    </Fragment>
  );
};

export default NewNavbar;

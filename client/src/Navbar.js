import React, { useState, Fragment } from 'react';
import { Button } from '@material-ui/core';
import Login from './Login';
import SignUp from './SignUp';
import { useStyles } from './JssStyleSheets/JssNavbar';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

const NewNavbar = (props) => {
  const classes = useStyles();
  const [openLogin, setOpenLogin] = useState(false);
  const [openSignUp, setOpenSignUp] = useState(false);
  const [isloggedIn, setloggedIn] = useState(false);

  return (
    <Fragment>
      <div className={classes.navbar}>
        <div className={classes.wContainer}>
          <div className={classes.buttonContainer}>
            {isloggedIn ? (
              <AccountCircleIcon />
            ) : (
              <Button className={classes.button} onClick={() => setOpenLogin(true)}>
                Sign In
              </Button>
            )}
          </div>
        </div>
      </div>

      <Login
        openLogin={openLogin}
        setOpenLogin={setOpenLogin}
        setOpenSignUp={setOpenSignUp}
        setloggedIn={setloggedIn}
      />
      <SignUp openSignUp={openSignUp} setOpenSignUp={setOpenSignUp} setOpenLogin={setOpenLogin} />
    </Fragment>
  );
};

export default NewNavbar;

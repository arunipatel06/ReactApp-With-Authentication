import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

const usestyles = makeStyles((theme) => ({
  div: {
    width: '100vw',
  },
  text: {
    textAlign: 'left',
    fontFamily: '"Manrope", sans-serif',
    fontSize: '15px',
    fontWeight: 'regular',
    color: '#ffffff',
    position: 'fixed',
    bottom: '0',
  },
}));
const Footer = (props) => {
  const classes = usestyles();
  return (
    <div className={classes.div}>
      <Typography className={classes.text}>
        Copyright © 2021 Aruni Patel. All rights reserved
      </Typography>
    </div>
  );
};

export default Footer;

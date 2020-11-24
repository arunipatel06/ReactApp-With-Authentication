import React, { useEffect, useRef } from 'react';
import NewNavbar from './Navbar';

import { makeStyles } from '@material-ui/core/styles';
import Background from './assests/homeImage.jpg';

export const useStyles = makeStyles((theme) => ({
  homeImage: {
    height: '100vh',
    width: '100%',
    textAlign: 'center',
    backgroundImage: `url(${Background})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    padding: '0px',
  },
}));

const HomePage = (props) => {
  const classes = useStyles();

  return (
    <section className={classes.homeImage}>
      <div>
        <div>
          <NewNavbar />
        </div>
      </div>
    </section>
  );
};

export default HomePage;

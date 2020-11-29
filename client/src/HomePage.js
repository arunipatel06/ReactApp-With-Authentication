import React, { useEffect, useRef } from 'react';
import NewNavbar from './Navbar';
import Footer from './Footer';
import { useStyles } from './JssStyleSheets/JssHomePage';

const HomePage = (props) => {
  const classes = useStyles();

  return (
    <section className={classes.homeImage}>
      <div>
        <NewNavbar />
      </div>
      <div>
        <Footer />
      </div>
    </section>
  );
};

export default HomePage;

import React from 'react';
import NewNavbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import { useStyles } from './JssHomePage';

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

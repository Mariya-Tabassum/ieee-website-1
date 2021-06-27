import { Button, Typography } from "@material-ui/core";
import React from "react";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

import Profile from "../../components/profile/profile";
// import backgroundImage from  "../../images/profiles/background.webp";

import useStyles from "./style";

const OurTeam = () => {
  const classes = useStyles();
  return (
    <div className={classes.OurTeam}>
      <section className={classes.OurTeam__headers}>
        <Typography variant="h3">OUR TEAM</Typography>
        <div className={classes.OurTeam__headers__buttons}>
          <Button
            variant="contained"
            className={classes.OurTeam__headers__committee}
            href="#ecxom"
          >
            Executive Committee
          </Button>
          <Button
            variant="contained"
            className={classes.OurTeam__headers__committee}
            href="#program"
          >
            Program Committee
          </Button>
          <Button
            variant="contained"
            className={classes.OurTeam__headers__committee}
            href="#socialMedia"
          >
            Social Media Committee
          </Button>
          <Button
            variant="contained"
            className={classes.OurTeam__headers__committee}
            href="#membership"
          >
            Membership Committee
          </Button>
        </div>
      </section>
      <section className={classes.OurTeam__group} id="excom">
        <Typography variant="h4" className={classes.OurTeam__title}>Executive Committee</Typography>
        <Carousel autoPlay={true} infiniteLoop={true} showThumbs={false}>
          <div className={classes.Ourteam__group__team} >
            <Profile />
            <Profile />
            <Profile />
            <Profile />
            <Profile />
          </div>
          <div className={classes.Ourteam__group__team}>
            <Profile />
            <Profile />
            <Profile />
            <Profile />
            <Profile />
          </div>
        </Carousel>
      </section>
      <section className={classes.OurTeam__group} id="program">
        <Typography variant="h4" className={classes.OurTeam__title}>Program Committee</Typography>
        <div className={classes.Ourteam__group__team}>
          <Profile />
          <Profile />
          <Profile />
          <Profile />
          <Profile />
          <Profile />
        </div>
      </section>
      <section className={classes.OurTeam__group} id="socialMedia">
        <Typography variant="h4" className={classes.OurTeam__title}>Social Media Committee</Typography>
        <div className={classes.Ourteam__group__team}>
          <Profile />
          <Profile />
          <Profile />
          <Profile />
        </div>
      </section>
      <section className={classes.OurTeam__group} id="membership">
        <Typography variant="h4" className={classes.OurTeam__title}>Membership Committee</Typography>
        <div className={classes.Ourteam__group__team}>
          <Profile />
          <Profile />
          <Profile />
          <Profile />
          <Profile />
        </div>
      </section>
    </div>
  );
};

export default OurTeam;

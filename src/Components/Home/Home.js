import React from 'react';
import home from '../../img/home.png';
import webDeveloper from '../../img/webdevelopment.jpg';
import webdDsigner from '../../img/designing.jpg';
import nomainIshaq from '../../img/nomanishaq.jpeg';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import style from './Home.module.css';
import FacebookIcon from '@material-ui/icons/Facebook';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import { Grid, Container } from '@material-ui/core';

export default function Home() {
  // social media links
  const Link = (value) => {
    if (value === 'facebook') {
      window.open('https://www.facebook.com/nomanishaq2');
    } else if (value === 'github') {
      window.open('https://www.github.com/nomanishaq');
    }
    else if (value === 'linkedin') {
      window.open('https://www.linkedin.com/in/nomanishaq/');
    }
    else if (value === 'instagram') {
      window.open('https://www.instagram.com/noman_ishaq_/');
    }
  }
  return (
    <div className={style.container}>

      {/* home section start*/}
      <section className={style.home}>
        <Container>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <img src={home} className={style.homeImg} alt="home" />
            </Grid>
            <Grid item xs={12} sm={6}>
              <div className={style.homeContent}>
                <h1 className={style.heading}>I Am Noman Ishaq</h1>
                <h2 className={style.title}>Full Stack Developer</h2>
              </div>
              <div className={style.socialIcon}>
                <Grid item xs={12} sm={12}>
                  <FacebookIcon className={style.icon} onClick={() => Link('facebook')} />
                  <GitHubIcon className={style.icon} onClick={() => Link('github')} />
                  <LinkedInIcon className={style.icon} onClick={() => Link('linkedin')} />
                  <InstagramIcon className={style.icon} onClick={() => Link('instagram')} />
                </Grid>
              </div>
            </Grid>
          </Grid>
        </Container>
      </section>
      {/* home section end */}


      {/* Introduction start */}
      <section>
        <Container>
          <h1 className={style.introHeading}>Introduction</h1>
          <Grid container spacing={3}>
           
            <Grid item xs={12} sm={6}>
              <div className={style.content}>
              <h1 className={style.introTitle}>Noman Ishaq</h1>
              <Container>
              I'm Noman Ishaq. I am Web Developer and Web Designer with more than 2 years of experience. 
              I have developed tons of Web Projects on various technologies including Html, css, Javascript,React, and Php. 
              </Container>
              </div>
            </Grid>

            <Grid item xs={12} sm={6}>
              <img src={nomainIshaq} className={style.introImg} alt="Noman Ishaq"/>
            </Grid>
          </Grid>
        </Container>
      </section>
      {/* Introduction end */}


      {/* skill section start */}
      <section className={style.skillSection}>
        <Container>
          <h1 className={style.skillsTittle}>Expert In</h1>
          <Grid container spacing={5}>
            <Grid item xs={12} sm={6}>
              <img src={webDeveloper} alt="web development" width="100%" />
              <h2>Web Developer</h2>
            </Grid>
            <Grid item xs={12} sm={6}>
              <img src={webdDsigner} alt="web designer" width="100%" />
              <h2>Web Designer</h2>
            </Grid>
          </Grid>
        </Container>
      </section>
      {/* skill section end */}



      

    </div>
  );
}

import React from 'react';
import home from '../../img/home.png';
import style from './Home.module.css';
import FacebookIcon from '@material-ui/icons/Facebook';
import GitHubIcon from '@material-ui/icons/GitHub';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import {Grid ,Container} from '@material-ui/core';


export default function Home() {
 
  return (
    <div className={style.home}>
    <Container ><Grid container spacing={3}>
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
                  <FacebookIcon className={style.icon}/>
                  <GitHubIcon className={style.icon}/>
                  <LinkedInIcon  className={style.icon}/>
                  <TwitterIcon  className={style.icon}/>
                  <InstagramIcon  className={style.icon}/>

              </Grid>
          </div>
        </Grid>

       
      </Grid>
      </Container>
    </div>
  );
}

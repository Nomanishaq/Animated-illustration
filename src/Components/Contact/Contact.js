import React from 'react';
import { Container, Grid } from '@material-ui/core';
import contactImg from '../../img/contact.jpg';
import style from './Contact.module.css';

function Contact() {
    return (
        <div className={style.container}>
            <div className={style.titleContainer}>
                <Container>
                    <h1 className={style.title}>Contact us</h1>
                </Container>
            </div>

            <Container className={style.box}>
                <Grid container spacing={5} >
                 <Grid item xs={12} sm={6} >
                    <Container>
                        <img src={contactImg} alt="contact" className={style.img} />
                    </Container>
                </Grid>


                    <Grid item xs={12} sm={6} >
                        <Container>

                        <h1 className={style.infoTitle}>Info:</h1>
                            <div className={style.contactInfo}>
                                <label>Email Address: </label>
                                <h3><a href="mailto:Nomanishaq251@gmail.com">Nomanishaq251@gmail.com</a></h3>
                                <hr />
                                <br />
                                <label>Phone: </label>
                                <h2><a href="tel:+92 3093672516">+92 3093672516</a></h2>
                                <hr />
                            </div>
                        </Container>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}

export default Contact

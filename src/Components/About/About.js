import React from 'react';
import {Container} from '@material-ui/core';
import style from './About.module.css';

function About() {
    return (
        <div className={style.container}>
             <div className={style.titleContainer}>
                <Container>
                    <h1 className={style.title}>About Noman Ishaq</h1>
                </Container>
            </div>

        </div>
    )
}

export default About

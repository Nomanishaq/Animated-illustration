import React from 'react';
import {Container} from '@material-ui/core';
import style from './Projects.module.css';

function Projects() {
    return (
        <div className={style.container}>
         <div className={style.titleContainer}>
                <Container>
                    <h1 className={style.title}>Previous  Project's</h1>
                </Container>
            </div>
        </div>
    )
}

export default Projects

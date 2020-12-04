import React, { useContext } from 'react';
import { Typography } from '@material-ui/core';
import { Intro } from './../components/about';

const About: React.FC = () => {
    return (
        <div>
            <Intro />
            <Typography>about page</Typography>
            <Typography>about page</Typography>
            <Typography>about page</Typography>
            <Typography>about page</Typography>
            <Typography>about page</Typography>
            <Typography>about page</Typography>
        </div>
    )
}

export default About
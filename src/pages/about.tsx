import React, { useContext } from 'react';
import { Typography } from '@material-ui/core';
import { Intro } from 'components/about';
import { Layout, SEO } from 'components/common';
import { Header } from 'components/theme';

const About: React.FC = () => {
    return (
        <Layout>
            <SEO title="About" description="" location="/about" />
            <Header />
            <div style={{ height: 300 }}>
                <Typography>about page</Typography>
            </div>
        </Layout>
    )
}

export default About
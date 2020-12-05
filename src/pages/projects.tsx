import React, { useContext } from 'react';
import { Typography } from '@material-ui/core';
import { Layout, SEO } from 'components/common';
import { Header } from 'components/theme';
import { Grid } from '@material-ui/core';

const Wrapper: React.FC = ({ children }) => {
    return (
        <div style={{ paddingLeft: "15%", paddingRight: "15%" }}>
            {children}
        </div>
    )
}

const Title: React.FC = () => {
    return (
        <Typography style={{ fontSize: 30, fontWeight: 'bold' }}>Projects</Typography>
    )
}

const GitHubProjects: React.FC = () => {
    return (
        <Grid container style={{ padding: 30 }}>
            <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                <Typography style={{ fontSize: 30, fontWeight: 'bold' }}>GitHub</Typography>
            </Grid>
            <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
            </Grid>
        </Grid>
    )
}

const Projects: React.FC = () => {
    return (
        <Layout>
            <SEO title="Projects" description="" location="/projects" />
            <Header />
            <Wrapper>
                <Title />
                <GitHubProjects />
            </Wrapper>
        </Layout>
    )
}

export default Projects
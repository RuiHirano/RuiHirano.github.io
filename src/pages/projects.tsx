import React, { useContext } from 'react';
import { Typography } from '@material-ui/core';
import { Layout, SEO } from 'components/common';
import { Header } from 'components/theme';

const Projects: React.FC = () => {
    return (
        <Layout>
            <SEO title="Projects" description="" location="/projects" />
            <Header />
            <div style={{ height: 300 }}>
                <Typography>projects page</Typography>
            </div>
        </Layout>
    )
}

export default Projects
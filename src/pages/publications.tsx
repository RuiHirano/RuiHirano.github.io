import React, { useContext } from 'react';
import { Typography } from '@material-ui/core';
import { Layout, SEO } from 'components/common';
import { Header } from 'components/theme';

const Publications: React.FC = () => {
    return (
        <Layout>
            <SEO title="Publication" description="" location="/publication" />
            <Header />
            <div style={{ height: 300 }}>
                <Typography>publication page</Typography>
            </div>
        </Layout>
    )
}

export default Publications
import React, { useContext } from 'react';
import { Typography } from '@material-ui/core';
import { Layout, SEO } from 'components/common';
import { Header } from 'components/theme';

const Services: React.FC = () => {
    return (
        <Layout>
            <SEO title="Services" description="" location="/services" />
            <Header />
            <div style={{ height: 300 }}>
                <Typography>services page</Typography>
            </div>
        </Layout>
    )
}

export default Services
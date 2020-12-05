import React, { useContext } from 'react';
import { Typography } from '@material-ui/core';
import { Layout, SEO } from 'components/common';
import { Header } from 'components/theme';

const Wrapper: React.FC = ({ children }) => {
    return (
        <div style={{ paddingLeft: "15%", paddingRight: "15%" }}>
            {children}
        </div>
    )
}

const Title: React.FC = () => {
    return (
        <Typography style={{ fontSize: 30, fontWeight: 'bold' }}>Services</Typography>
    )
}

const Services: React.FC = () => {
    return (
        <Layout>
            <SEO title="Services" description="" location="/services" />
            <Header />
            <Wrapper>
                <Title />
            </Wrapper>
        </Layout>
    )
}

export default Services
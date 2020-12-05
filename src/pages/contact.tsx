import React, { useContext } from 'react';
import { Typography } from '@material-ui/core';
import { Layout, SEO } from 'components/common';
import { Header } from 'components/theme';
import { styled } from '@material-ui/core/styles';
import { Contact } from 'components/landing';

const Wrapper = styled('div')({
    paddingLeft: "15%",
    paddingRight: "15%"
});

const Title = styled(Typography)({
    fontSize: 30,
    fontWeight: 'bold',
    paddingTop: 10,
    paddingBottom: 10
});


const ContactPage: React.FC = () => {
    return (
        <Layout>
            <SEO title="Contact" description="" location="/about" />
            <Header />
            <Wrapper>
                <Title>Contact</Title>
                <Contact />
            </Wrapper>
        </Layout>
    )
}

export default ContactPage
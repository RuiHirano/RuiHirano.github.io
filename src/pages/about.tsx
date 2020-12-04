import React, { useContext } from 'react';
import { Typography } from '@material-ui/core';
import { Intro } from 'components/about';
import { Layout, SEO } from 'components/common';
import { Header } from 'components/theme';
import ProfileImg from '../assets/services/profile.png'
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
        <Typography style={{ fontSize: 30, fontWeight: 'bold' }}>about</Typography>
    )
}

const Profile: React.FC = () => {
    return (
        <Grid container style={{ padding: 30 }}>
            <Grid item xl={4} lg={4} md={4} sm={12} xs={12}>
                <img
                    src={ProfileImg}
                    style={{ width: 300, height: 300 }}
                />
            </Grid>
            <Grid item xl={8} lg={8} md={8} sm={12} xs={12}>
                <Typography style={{ fontSize: 30, fontWeight: 'bold' }}>Rui Hirano</Typography>
                <Typography style={{ fontSize: 20, whiteSpace: "pre-wrap" }}>{"名古屋大学大学院工学研究科/工学部/\n情報・通信工学専攻 河口研究室 修士 1 年\nE-mail: r.hrn.0930[at]gmail.com\nTEL: 052-789-4388\n住所: 〒 464-8603 名古屋市千種区不老町 IB 電子情報館北棟 5F 519"}</Typography>
            </Grid>

        </Grid>
    )
}

const About: React.FC = () => {
    return (
        <Layout>
            <SEO title="About" description="" location="/about" />
            <Header />
            <Wrapper>
                <Title />
                <Profile />
            </Wrapper>
        </Layout>
    )
}

export default About
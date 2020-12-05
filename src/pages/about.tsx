import React, { useContext } from 'react';
import { Typography } from '@material-ui/core';
import { Intro } from 'components/about';
import { Layout, SEO } from 'components/common';
import { Header } from 'components/theme';
import ProfileImg from '../assets/services/profile.png'
import { Grid } from '@material-ui/core';
import { styled } from '@material-ui/core/styles';
import { useIntl } from "react-intl";

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

const Profile: React.FC = () => {
    const intl = useIntl()
    return (
        <Grid container style={{ padding: 30 }} spacing={2}>
            <Grid item xl={4} lg={4} md={4} sm={12} xs={12}>
                <img
                    src={ProfileImg}
                    style={{}}
                />
            </Grid>
            <Grid item xl={8} lg={8} md={8} sm={12} xs={12}>
                <Title>{intl.formatMessage({ id: "name" })}</Title>
                <Typography style={{ fontSize: 20, whiteSpace: "pre-wrap" }}>{intl.formatMessage({ id: "about_description" })}</Typography>
            </Grid>

        </Grid>
    )
}

const Biography: React.FC = () => {
    const intl = useIntl()
    const bioData = [
        intl.formatMessage({ id: "bio_data1" }),
        intl.formatMessage({ id: "bio_data2" }),
        intl.formatMessage({ id: "bio_data3" }),
        intl.formatMessage({ id: "bio_data4" }),
    ]
    return (
        <Grid container style={{ padding: 30 }}>
            <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                <Title>Biography</Title>
            </Grid>
            <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                {bioData.map((data) => (
                    <Typography style={{ fontSize: 20, whiteSpace: "pre-wrap" }}>{data}</Typography>
                ))}
            </Grid>
        </Grid>
    )
}

const Skills: React.FC = () => {
    return (
        <Grid container style={{ padding: 30 }}>
            <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                <Title>Skills</Title>
            </Grid>
            <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                <Typography style={{ fontSize: 20, whiteSpace: "pre-wrap" }}>{"プログラミング: Go, Python, Javascript, Typescript, React, React Native"}</Typography>
                <Typography style={{ fontSize: 20, whiteSpace: "pre-wrap" }}>{"ホットワード: シミュレーション、デザインパターン, マイクロアーキテクチャ, TDD, Deep Learning"}</Typography>
                <Typography style={{ fontSize: 20, whiteSpace: "pre-wrap" }}>{"趣味: ソフトテニス, プログラミング, ギター, 映画観賞, お笑い, 酒"}</Typography>
            </Grid>
        </Grid>
    )
}

const News: React.FC = () => {

    const newsData = [
        {
            date: "2020年11月",
            title: "Aichi Startup ビジネスプランコンテストの出場者に選ばれました。"
        },
        {
            date: "2020年8月",
            title: "DICOMO2020にて優秀プレゼンテーション賞を受賞しました。"
        },
    ]
    return (
        <Grid container style={{ padding: 30 }}>
            <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                <Title>News</Title>
            </Grid>
            <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                {newsData.map((data, index) => {
                    return <Typography style={{ fontSize: 20, whiteSpace: "pre-wrap" }}>{`${data.date} ${data.title}`}</Typography>
                })}
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
                <Title>About</Title>
                <Profile />
                <News />
                <Biography />
                <Skills />
            </Wrapper>
        </Layout>
    )
}

export default About
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
        <Typography style={{ fontSize: 30, fontWeight: 'bold' }}>About</Typography>
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

const Biography: React.FC = () => {
    return (
        <Grid container style={{ padding: 30 }}>
            <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                <Typography style={{ fontSize: 30, fontWeight: 'bold' }}>Biography</Typography>
            </Grid>
            <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                <Typography style={{ fontSize: 20, whiteSpace: "pre-wrap" }}>{"2015年3月　愛知県立刈谷北高等学校　卒業"}</Typography>
                <Typography style={{ fontSize: 20, whiteSpace: "pre-wrap" }}>{"2019年3月　国立法人名古屋大学工学部電気電子情報工学科　卒業"}</Typography>
                <Typography style={{ fontSize: 20, whiteSpace: "pre-wrap" }}>{"2019年4月　名古屋大学大学院工学研究科 情報通信工学専攻 修士課程 (現在)"}</Typography>
                <Typography style={{ fontSize: 20, whiteSpace: "pre-wrap" }}>{"2019年4月　未来エレクトロニクス創成加速DII協働大学院プログラム 二期生 (現在)"}</Typography>
            </Grid>
        </Grid>
    )
}

const Skills: React.FC = () => {
    return (
        <Grid container style={{ padding: 30 }}>
            <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                <Typography style={{ fontSize: 30, fontWeight: 'bold' }}>Skills</Typography>
            </Grid>
            <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                <Typography style={{ fontSize: 20, whiteSpace: "pre-wrap" }}>{"プログラミング: Go, Python, Javascript, Typescript, React, React Native"}</Typography>
                <Typography style={{ fontSize: 20, whiteSpace: "pre-wrap" }}>{"ホットワード: シミュレーション、デザインパターン, マイクロアーキテクチャ, TDD, Deep Learning"}</Typography>
                <Typography style={{ fontSize: 20, whiteSpace: "pre-wrap" }}>{"趣味: ソフトテニス, プログラミング, ギター, 映画観賞, お笑い, 酒"}</Typography>
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
                <Biography />
                <Skills />
            </Wrapper>
        </Layout>
    )
}

export default About
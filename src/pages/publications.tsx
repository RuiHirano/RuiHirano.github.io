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
        <Typography style={{ fontSize: 30, fontWeight: 'bold' }}>Publications</Typography>
    )
}


const CampasPresentation: React.FC = () => {
    return (
        <Grid container style={{ padding: 30 }}>
            <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                <Typography style={{ fontSize: 30, fontWeight: 'bold' }}>Campas Presentation</Typography>
            </Grid>
            <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                <Typography style={{ fontSize: 20, whiteSpace: "pre-wrap" }}>{`平野 流, "異なるサービス提供者間におけるトラストモデルとその実装に関する研究", 学部卒業研究発表会, 2019`}</Typography>
                <Typography style={{ fontSize: 20, whiteSpace: "pre-wrap" }}>{`平野 流, "構成を柔軟に変更可能な人流・交通流シミュレーションに関する研究", DII シンポジウム, 2019`}</Typography>
            </Grid>
        </Grid>
    )
}

const InternalConference: React.FC = () => {
    return (
        <Grid container style={{ padding: 30 }}>
            <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                <Typography style={{ fontSize: 30, fontWeight: 'bold' }}>Internal Conference</Typography>
            </Grid>
            <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                <Typography style={{ fontSize: 20, whiteSpace: "pre-wrap" }}>{`平野 流, 廣井 慧, 米澤 拓郎, 河口 信夫, "異なるサービス提供者間におけるトラストモデルとその実装に関する研究", 情報処理学会マルチメディア，分散，協調とモバイル(DICOMO2019)シンポジウム,pp.284-290, 2019`}</Typography>
                <Typography style={{ fontSize: 20, whiteSpace: "pre-wrap" }}>{`平野 流, "構成を柔軟に変更可能な人流・交通流シミュレーションに関する研究", WIDE 研究会, 2019`}</Typography>
            </Grid>
        </Grid>
    )
}

const InternationalConference: React.FC = () => {
    return (
        <Grid container style={{ padding: 30 }}>
            <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                <Typography style={{ fontSize: 30, fontWeight: 'bold' }}>International Conference</Typography>
            </Grid>
            <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
            </Grid>
        </Grid>
    )
}

const RefereedJournal: React.FC = () => {
    return (
        <Grid container style={{ padding: 30 }}>
            <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                <Typography style={{ fontSize: 30, fontWeight: 'bold' }}>Refereed Journal</Typography>
            </Grid>
            <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                <Typography style={{ fontSize: 20, whiteSpace: "pre-wrap" }}>{`平野 流, 廣井 慧, 米澤 拓郎, 河口 信夫, "異なるサービス提供者間におけるトラストモデルとその実装に関する研究", 情報処理学会マルチメディア，分散，協調とモバイル(DICOMO2019)シンポジウム,pp.284-290, 2019`}</Typography>
            </Grid>
        </Grid>
    )
}


const Publications: React.FC = () => {
    return (
        <Layout>
            <SEO title="Publication" description="" location="/publication" />
            <Header />
            <Wrapper>
                <Title />
                <RefereedJournal />
                <InternalConference />
                <InternationalConference />
                <CampasPresentation />
            </Wrapper>
        </Layout>
    )
}

export default Publications
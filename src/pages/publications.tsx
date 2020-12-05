import React, { useContext } from 'react';
import { Typography } from '@material-ui/core';
import { Layout, SEO } from 'components/common';
import { Header } from 'components/theme';
import { Grid } from '@material-ui/core';
import { styled } from '@material-ui/core/styles';

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

interface PubData {
    auther: string[],
    title: string,
    year: number,
    place: string,
    confName: string
}

const publicationData = {
    campasPresentation: [
        {
            auther: ["平野 流"],
            title: "異なるサービス提供者間におけるトラストモデルとその実装に関する研究",
            year: 2019,
            place: "名古屋大学",
            confName: "学部卒業研究発表会",
        },
        {
            auther: ["平野 流"],
            title: "構成を柔軟に変更可能な人流・交通流シミュレーションに関する研究",
            year: 2019,
            place: "名古屋大学",
            confName: "DII シンポジウム",
        }
    ] as PubData[],
    internalConference: [
        {
            auther: ["平野 流", "廣井 慧", "米澤 拓郎", "河口 信夫"],
            title: "情報処理学会マルチメディア，分散，協調とモバイル(DICOMO2019)シンポジウム",
            year: 2019,
            place: "福島県",
            confName: "DII シンポジウム",
        },
        {
            auther: ["平野 流"],
            title: "構成を柔軟に変更可能な人流・交通流シミュレーションに関する研究",
            year: 2019,
            place: "名古屋大学",
            confName: "WIDE 研究会",
        }
    ] as PubData[],
    internationalConference: [

    ] as PubData[],
    refferedConference: [
        {
            auther: ["平野 流", "廣井 慧", "米澤 拓郎", "河口 信夫"],
            title: "異なるサービス提供者間におけるトラストモデルとその実装に関する研究",
            year: 2019,
            place: "福島県",
            confName: "情報処理学会マルチメディア，分散，協調とモバイル(DICOMO2019)シンポジウム",
        },
    ] as PubData[],
    award: [
    ] as PubData[],
}


const CampasPresentation: React.FC = () => {
    return (
        <Grid container style={{ padding: 30 }}>
            <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                <Title>Campas Presentation</Title>
            </Grid>
            <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                {publicationData.campasPresentation.map((data, index) => {
                    let authers = ""
                    data.auther.forEach((auther) => { authers += auther + "," })
                    return <Typography style={{ fontSize: 20, whiteSpace: "pre-wrap" }}>{`${index + 1}. ${authers} "${data.title}", ${data.confName}, ${data.year}`}</Typography>
                })}
            </Grid>
        </Grid>
    )
}

const InternalConference: React.FC = () => {
    return (
        <Grid container style={{ padding: 30 }}>
            <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                <Title>Internal Conference</Title>
            </Grid>
            <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                {publicationData.internalConference.map((data, index) => {
                    let authers = ""
                    data.auther.forEach((auther) => { authers += auther + "," })
                    return <Typography style={{ fontSize: 20, whiteSpace: "pre-wrap" }}>{`${index + 1}. ${authers} "${data.title}", ${data.confName}, ${data.year}`}</Typography>
                })}
            </Grid>
        </Grid >
    )
}

const InternationalConference: React.FC = () => {
    return (
        <Grid container style={{ padding: 30 }}>
            <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                <Title>International Conference</Title>
            </Grid>
            <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                {publicationData.internationalConference.map((data, index) => {
                    let authers = ""
                    data.auther.forEach((auther) => { authers += auther + "," })
                    return <Typography style={{ fontSize: 20, whiteSpace: "pre-wrap" }}>{`${index + 1}. ${authers} "${data.title}", ${data.confName}, ${data.year}`}</Typography>
                })}
            </Grid>
        </Grid >
    )
}

const RefereedJournal: React.FC = () => {
    return (
        <Grid container style={{ padding: 30 }}>
            <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                <Title>Refereed Journal</Title>
            </Grid>
            <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                {publicationData.refferedConference.map((data, index) => {
                    let authers = ""
                    data.auther.forEach((auther) => { authers += auther + "," })
                    return <Typography style={{ fontSize: 20, whiteSpace: "pre-wrap" }}>{`${index + 1}. ${authers} "${data.title}", ${data.confName}, ${data.year}`}</Typography>
                })}
            </Grid>
        </Grid>
    )
}

const Award: React.FC = () => {
    return (
        <Grid container style={{ padding: 30 }}>
            <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                <Title>Award</Title>
            </Grid>
            <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                {publicationData.award.map((data, index) => {
                    let authers = ""
                    data.auther.forEach((auther) => { authers += auther + "," })
                    return <Typography style={{ fontSize: 20, whiteSpace: "pre-wrap" }}>{`${index + 1}. ${authers} "${data.title}", ${data.confName}, ${data.year}`}</Typography>
                })}
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
                <Title>Publications</Title>
                <RefereedJournal />
                <InternalConference />
                <InternationalConference />
                <CampasPresentation />
                <Award />
            </Wrapper>
        </Layout>
    )
}

export default Publications
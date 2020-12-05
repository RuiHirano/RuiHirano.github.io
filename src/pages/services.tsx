import React, { useContext } from 'react';
import { Typography, Card, CardContent, Grid } from '@material-ui/core';
import { Layout, SEO } from 'components/common';
import { Header } from 'components/theme';
import { styled } from '@material-ui/core/styles';
import { useIntl } from "react-intl";
import TradingManagerImg from '../assets/services/trading_manager.png'
import Covid19APIImg from '../assets/services/covid19_rader_for_japan_api.png'

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



/*const Title: React.FC = () => {
    return (
        <Typography style={{ fontSize: 30, fontWeight: 'bold' }}>Services</Typography>
    )
}*/


const Services: React.FC = () => {

    const intl = useIntl()
    const services = [
        {
            name: "Trading Manager",
            description: intl.formatMessage({ id: "trading_manager_description" }),
            url: 'http://ruihirano.info',
            imgsrc: TradingManagerImg,
        },
        {
            name: "Covid19 Rader for Japan API",
            description: intl.formatMessage({ id: "covid19_rader_for_japan_api_description" }),
            url: 'https://github.com/RuiHirano/covid19-rader-for-japan-api',
            imgsrc: Covid19APIImg,
        },
    ]

    const renderServiceList = () => {
        const content = services.map((service, index) => {
            return (
                <Grid item xl={4} lg={4} md={4} sm={12} xs={12}>
                    <Card>
                        <CardContent>
                            <h4>{service.name}</h4>
                            <img
                                src={service.imgsrc}
                            />
                            <p>{service.description}</p>
                        </CardContent>
                    </Card>
                </Grid>
            )
        })
        return (
            <Grid container spacing={5} style={{ paddingTop: 30 }}>
                {content}
            </Grid>
        )
    }

    return (
        <Layout>
            <SEO title="Services" description="" location="/services" />
            <Header />
            <Wrapper>
                <Title >Services</Title>
                {renderServiceList()}
            </Wrapper>
        </Layout>
    )
}

export default Services
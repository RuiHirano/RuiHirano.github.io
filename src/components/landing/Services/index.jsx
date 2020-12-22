import React, { useContext } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { ThemeContext } from 'providers/ThemeProvider';
import { Container, Card, TitleWrap } from 'components/common';
import Star from 'components/common/Icons/Star';
import Fork from 'components/common/Icons/Fork';
import { Wrapper, Grid, Item, Content, Stats, Languages } from './styles';
import CardMedia from '@material-ui/core/CardMedia';
import TradingManagerImg from '../../../assets/services/trading_manager.png'
import Covid19APIImg from '../../../assets/services/covid19_rader_for_japan_api.png'
import { useIntl } from "react-intl";
import { Button } from '@material-ui/core';
import { Link } from "gatsby"

const mockImageUrl = 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg'


export const Services = () => {
  const { theme } = useContext(ThemeContext);
  const intl = useIntl()


  const services = [
    {
      name: "Trading Manager",
      description: intl.formatMessage({ id: "trading_manager_description" }),
      url: 'https://play.google.com/store/apps/details?id=com.felixport0803.tradingmanager',
      imgsrc: TradingManagerImg,
    },
    {
      name: "Covid19 Rader for Japan API",
      description: intl.formatMessage({ id: "covid19_rader_for_japan_api_description" }),
      url: 'https://github.com/RuiHirano/covid19-rader-for-japan-api',
      imgsrc: Covid19APIImg,
    },
  ]

  const {
    github: {
      viewer: {
        repositories: { edges },
      },
    },
  } = useStaticQuery(
    graphql`
      {
        github {
          viewer {
            repositories(first: 8, orderBy: { field: STARGAZERS, direction: DESC }) {
              edges {
                node {
                  id
                  name
                  url
                  description
                  stargazers {
                    totalCount
                  }
                  forkCount
                  languages(first: 3) {
                    nodes {
                      id,
                      name
                    }
                  }
                }
              }
            }
          }
        }
      }
    `
  );
  console.log("URL", process.env.PUBLIC_URL)
  return (
    <Wrapper as={Container} id="services">
      <h2>Services</h2>
      <Grid>
        {services.map((service, index) => {
          if (index > 6) return

          return (
            <Item key={service.name} as="a" href={service.url} target="_blank" rel="noopener noreferrer" theme={theme}>
              <Card theme={theme}>
                <Content>
                  <h4>{service.name}</h4>
                  <img
                    src={service.imgsrc}
                  />
                  <p>{service.description}</p>
                </Content>
              </Card>
            </Item>
          )
        })}
      </Grid>

      <div style={{ display: 'flex', alignItems: 'center' }}>
        <div style={{ flexGrow: 1 }} />
        <div>
          <Link to="/services/">
            <Button variant="contained" disableElevation size="large" style={{ backgroundColor: "#0074d9", color: "white", marginTop: 20 }}>
              {intl.formatMessage({ id: "see_more" })}
            </Button>
          </Link>
        </div>
      </div>
    </Wrapper>
  );
};

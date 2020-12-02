import React, { useContext } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { ThemeContext } from 'providers/ThemeProvider';
import { Container, Card, TitleWrap } from 'components/common';
import Star from 'components/common/Icons/Star';
import Fork from 'components/common/Icons/Fork';
import { Wrapper, Grid, Item, Content, Stats, Languages } from './styles';
import CardMedia from '@material-ui/core/CardMedia';
import TradingManagerImg from '../../../assets/services/trading_manager.png'
import { useIntl } from "react-intl";
import { Button } from '@material-ui/core';

const mockImageUrl = 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg'


export const Services = () => {
  const { theme } = useContext(ThemeContext);
  const intl = useIntl()


  const services = [
    {
      name: "Trading Manager",
      description: intl.formatMessage({ id: "trading_manager_description" }),
      url: 'http://ruihirano.info',
      imgsrc: TradingManagerImg,
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
      <div style={{ display: 'flex' }}>
        <h2>Services</h2>
      </div>
      {services.map((service, index) => {
        if (index > 6) return

        return (
          <Grid>
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
          </Grid>
        )
      })}

      <div style={{ display: 'flex', alignItems: 'center' }}>
        <div style={{ flexGrow: 1 }} />
        <div>
          <Button variant="contained" disableElevation size="large" style={{ backgroundColor: "#0074d9", color: "white", marginTop: 20 }}>{intl.formatMessage({ id: "see_more" })}</Button>
        </div>
      </div>
    </Wrapper>
  );
};

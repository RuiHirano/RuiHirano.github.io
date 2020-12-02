import React, { useContext } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { ThemeContext } from 'providers/ThemeProvider';
import { Container, Card, TitleWrap } from 'components/common';
import Star from 'components/common/Icons/Star';
import Fork from 'components/common/Icons/Fork';
import { Wrapper, Grid, Item, Content, Stats, Languages } from './styles';
import CardMedia from '@material-ui/core/CardMedia';
import TradingManagerImg from '../../../assets/services/trading_manager.png'

const mockImageUrl = 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg'

const mock_services = [
  {
    name: "Trading Manager",
    description: "This is ",
    url: 'http://ruihirano.info',
    imgsrc: '../../../assets/services/trading_manager.png',
  },
]

export const Services = () => {
  const { theme } = useContext(ThemeContext);
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
  return (
    <Wrapper as={Container} id="projects">
      <div style={{ display: 'flex' }}>
        <h2>Services</h2>
      </div>
      <Grid>
        {mock_services.map((service) => (
          <Item key={service.name} as="a" href={service.url} target="_blank" rel="noopener noreferrer" theme={theme}>
            <Card theme={theme}>
              <Content>
                <h4>{service.name}</h4>
                <img
                  src={require(service.imgsrc)}
                />
              </Content>
            </Card>
          </Item>
        ))}
      </Grid>
    </Wrapper>
  );
};

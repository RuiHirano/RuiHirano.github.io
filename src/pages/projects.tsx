import React, { useContext } from 'react';
import { Layout, SEO } from 'components/common';
import { Header } from 'components/theme';
import { useStaticQuery, graphql } from 'gatsby';
import { Typography, Card, CardContent, Grid } from '@material-ui/core';
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

const GitHubProjects: React.FC = () => {

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
                repositories(first: 6, orderBy: { field: STARGAZERS, direction: DESC }) {
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
    console.log("asd", edges)

    const content = edges.map(({ node }: any) => {
        return (
            <Grid item xl={4} lg={4} md={4} sm={12} xs={12}>
                <Card style={{ height: 200 }}>
                    <CardContent>
                        <h4>{node.name}</h4>
                        <p>{node.description}</p>
                    </CardContent>
                </Card>
            </Grid>
        )
    })
    return (
        <Grid container spacing={5} style={{ paddingTop: 30 }}>
            <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                <Title>Github</Title>
            </Grid>
            {content}
        </Grid>
    )
}

const Projects: React.FC = () => {
    return (
        <Layout>
            <SEO title="Projects" description="" location="/projects" />
            <Header />
            <Wrapper>
                <Title >Projects</Title>
                <GitHubProjects />
            </Wrapper>
        </Layout>
    )
}

export default Projects
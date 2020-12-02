const path = require('path');

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, 'src'), 'node_modules'],
    },
  });
};

exports.createPages = async function ({ actions, graphql }) {
  const { data } = await graphql(`
    query {
      allMarkdownRemark {
        nodes {
          fields {
            slug
          }
        }
      }
    }
  `)
  actions.createPage({
    path: "/about",
    component: require.resolve(`./src/pages/about/index.tsx`),
  })
  actions.createPage({
    path: "/publications",
    component: require.resolve(`./src/pages/publications/index.tsx`),
  })
  actions.createPage({
    path: "/projects",
    component: require.resolve(`./src/pages/projects/index.tsx`),
  })
  actions.createPage({
    path: "/services",
    component: require.resolve(`./src/pages/services/index.tsx`),
  })
}
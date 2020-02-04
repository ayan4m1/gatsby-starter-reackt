require('dotenv').config();

module.exports = {
  siteMetadata: {
    title: 'Gatsby Reackt Starter',
    description: 'This is an opinionated Gatsby starter with React and Redux.',
    author: '@gatsbyjs'
  },
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`
      }
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 590
            }
          }
        ]
      }
    },
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'gatsby-starter-reackt',
        /* eslint-disable camelcase */
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        /* eslint-enable camelcase */
        display: 'minimal-ui'
      }
    },
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: process.env.GA_TRACKING_ID
      }
    },
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-offline',
    'gatsby-plugin-sass',
    'gatsby-plugin-eslint',
    {
      resolve: 'gatsby-plugin-module-resolver',
      options: {
        root: './src/',
        aliases: {}
      }
    }
  ]
};

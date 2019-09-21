/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  plugins: [
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-plugin-react-redux',
      options: {
        pathToCreateStoreModule: './src/state/createStore.js',
        serialize: {
          space: 0,
          isJSON: true,
          unsafe: false,
        },
      }
    }, 
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: '26znn7ncoyuw',
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
      }
    }
  ]
}

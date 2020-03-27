module.exports = {
  pathPrefix: `/gatsby-creative`,
  siteMetadata: {
    title: `Instituto Casa da Felicidade`,
    description: `Associação sem fins lucrativos com o objetivo de promover uma educação católica autêntica por meio da transmissão do grande tesouro espiritual que existe em matéria de educação para as crianças e famílias`,
    author: `@institutocasadafelicidade`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: 'gatsby-source-googlemaps-geocoding',
      options: {
        key: 'AIzaSyD2D4BS6D-Z2LUtOID-zdB9cTfMKvs1MQQ',
        address: 'R. Mediterrâneo, 982, Jardim do Mar, São Bernardo do Campo'
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `instituto-casa-da-felicidade`,
        short_name: `casa-da-felicidade`,
        start_url: `/`,
        background_color: `002f72`,
        theme_color: `002f72`,
        display: `minimal-ui`,
        icon: `src/images/logo.jpeg`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-sass`,
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Merriweather:400,300,300italic,400italic,700,700italic', 'Merriweather+Sans:400,700']
        }
      }
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}

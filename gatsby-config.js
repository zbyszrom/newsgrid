

module.exports = {
  siteMetadata: {
    title: `Gatsby Newsgrid`,
    description: `Kick off your next, great Gatsby project`,
    author: `zbyszrom`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Inria Serif`,       
          },
          {
            family: `Tomorrow`,        
          },
        ],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-remark`,
    `gatsby-plugin-styled-components`, 
  ]
}

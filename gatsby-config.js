require('dotenv').config()

export const siteMetadata = {
  title: `Creative Portfolio`,
}
export const plugins = [
  `gatsby-plugin-react-helmet`,
  `gatsby-plugin-sass`,
  `gatsby-transformer-remark`,
  {
    resolve: `gatsby-source-datocms`,
    options: {
      apiToken: process.env.DATO_API_TOKEN,
    },
  },
]

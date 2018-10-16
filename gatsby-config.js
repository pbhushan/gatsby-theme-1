require('dotenv').config()
const config = require('./content/meta/config')
const theme = require('./src/themeSetting/globalThemes')
module.exports = {
  siteMetadata: {
    title: config.siteTitle,
    description: config.siteDescription,
    language: config.siteLanguage,
    keyword: config.siteKeyword,
    siteUrl: config.siteUrl,
    siteType: config.siteType,
    siteImage: config.siteImage,
    pathPrefix: config.pathPrefix,
    siteAuthorName: config.siteAuthorName,
    facebook: {
      appId: process.env.FB_APP_ID ? process.env.FB_APP_ID : '',
    },
    twitter: {
      card: config.twitter_card,
      siteHandler: config.twitter_site,
      title: config.twitter_title,
      description: config.twitter_description,
      creatorHandler: config.twitter_creator,
      image: config.twitter_image,
    },
    // social for website
    authorGithubLink: config.authorGithubLink,
    authorFacebookLink: config.authorFacebookLink,
    authorTwitterLink: config.authorTwitterLink,
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-nprogress',
      options: {
        color: 'blue',
      },
    },
    `gatsby-plugin-lodash`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: config.manifestName,
        short_name: config.manifestShortName,
        start_url: config.manifestStartUrl,
        background_color: theme.bg.primary,
        theme_color: theme.bg.primary,
        display: config.manifestDisplay,
        icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-offline',
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/content/`,
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-catch-links`,
    /* {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_ID,
      },
    }, */
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          `gatsby-plugin-sharp`,
          {
            resolve: `gatsby-remark-images`,
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 600,
            },
          },
          `gatsby-remark-responsive-iframe`,
          `gatsby-remark-smartypants`,
          {
            resolve: 'gatsby-remark-emojis',
            options: {
              // Deactivate the plugin globally (default: true)
              active: true,
              // Add a custom css class
              class: 'emoji-icon',
              // Select the size (available size: 16, 24, 32, 64)
              size: 64,
              // Add custom styles
              styles: {
                display: 'inline',
                margin: '0',
                'margin-top': '1px',
                position: 'relative',
                top: '5px',
                width: '25px',
              },
            },
          },
        ],
      },
    },
  ],
}

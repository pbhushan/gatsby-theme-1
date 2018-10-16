import React from 'react'
import Helmet from 'react-helmet'
import { graphql, StaticQuery } from 'gatsby'
import PropTypes from 'prop-types'

const HelmetWrapper = ({ data }) => {
  const { site } = data
  const { siteMetadata } = site
  return (
    <Helmet
      htmlAttributes={{
        lang: siteMetadata.language,
        prefix: 'og: http://ogp.me/ns#',
      }}
    >
      <title>{siteMetadata.title}</title>

      {/* General tags */}
      <meta name="description" content={siteMetadata.description} />
      <meta name="author" content={siteMetadata.siteAuthorName} />
      <meta name="keyword" content={siteMetadata.keyword} />

      {/* OpenGraph tags */}
      <meta property="og:url" content={siteMetadata.siteUrl} />
      <meta property="og:title" content={siteMetadata.title} />
      <meta property="og:description" content={siteMetadata.description} />
      <meta property="og:image" content={siteMetadata.siteImage} />
      <meta property="og:type" content={siteMetadata.siteType} />
      <meta property="fb:app_id" content={siteMetadata.facebook.appId} />

      {/*Twitter Card data */}
      <meta name="twitter:card" content={siteMetadata.twitter.card} />
      <meta name="twitter:site" content={siteMetadata.twitter.siteHandler} />
      <meta name="twitter:title" content={siteMetadata.twitter.title} />
      <meta
        name="twitter:description"
        content={siteMetadata.twitter.description}
      />
      <meta
        name="twitter:creator"
        content={siteMetadata.twitter.creatorHandler}
      />
      <meta name="twitter:image" content={siteMetadata.twitter.image} />
    </Helmet>
  )
}

const Seo = () => {
  return (
    <StaticQuery
      query={graphql`
        query SeoQuery {
          site {
            siteMetadata {
              title
              description
              language
              keyword
              siteType
              siteUrl
              siteImage
              pathPrefix
              siteAuthorName
              facebook {
                appId
              }
              twitter {
                card
                siteHandler
                title
                description
                creatorHandler
                image
              }
            }
          }
        }
      `}
      render={data => <HelmetWrapper data={data} />}
    />
  )
}

HelmetWrapper.propTypes = {
  data: PropTypes.object.isRequired,
}

export default Seo

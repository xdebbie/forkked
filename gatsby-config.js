require('dotenv').config({
    path: `.env.${process.env.NODE_ENV}`
})
module.exports = {
    siteMetadata: {
        title: `forkked`,
        description: `forkked`,
        author: `@xdebbie`
    },
    plugins: [
        `gatsby-plugin-react-helmet`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/images`
            }
        },
        `gatsby-transformer-sharp`,
        `gatsby-transformer-remark`,
        `gatsby-plugin-sharp`,
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `gatsby-starter-default`,
                short_name: `starter`,
                start_url: `/`,
                background_color: `#663399`,
                theme_color: `#663399`,
                display: `minimal-ui`,
                icon: `src/images/gatsby-icon.png` // This path is relative to the root of the site.
            }
        },
        `gatsby-plugin-sass`,
        {
            resolve: `gatsby-plugin-env-variables`,
            options: {
                allowList: ['CONTENTFUL_ACCESS_TOKEN', 'CONTENTFUL_SPACE_ID']
            }
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/images`
            }
        },
        {
            resolve: 'gatsby-plugin-web-font-loader',
            options: {
                custom: {
                    families: [
                        'TG Praktikal, Tiempos Headline, Meta Serif Pro, Myriad Pro, Geogrotesque'
                    ],
                    urls: ['/fonts/fonts.css']
                }
            }
        },
        {
            resolve: `gatsby-source-contentful`,
            options: {
                spaceId: `${process.env.CONTENTFUL_SPACE_ID}`,
                accessToken: `${process.env.CONTENTFUL_ACCESS_TOKEN}`
            }
        },
        {
            resolve: 'gatsby-plugin-react-svg',
            options: {
                rule: {
                    include: /assets/
                }
            }
        }
        // this (optional) plugin enables Progressive Web App + Offline functionality
        // To learn more, visit: https://gatsby.dev/offline
        // `gatsby-plugin-offline`,
    ]
}

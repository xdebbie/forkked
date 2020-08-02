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
                icon: `src/images/forkked.png` // This path is relative to the root of the site.
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
        },
        {
            resolve: 'gatsby-transformer-remark',
            options: {
                plugins: [
                    {
                        resolve: 'gatsby-remark-embed-video',
                        options: {
                            width: 800,
                            // ratio: 1.77, // Optional: Defaults to 16/9 = 1.77
                            // height: 400, // Optional: Overrides optional.ratio
                            related: false, //Optional: Will remove related videos from the end of an embedded YouTube video.
                            noIframeBorder: true, //Optional: Disable insertion of <style> border: 0
                            urlOverrides: [
                                {
                                    id: 'youtube',
                                    embedURL: videoId =>
                                        `https://www.youtube-nocookie.com/embed/${videoId}`
                                }
                            ], //Optional: Override URL of a service provider, e.g to enable youtube-nocookie support
                            containerClass: 'embedVideo-container' //Optional: Custom CSS class for iframe container, for multiple classes separate them by space
                        }
                    },
                    {
                        resolve: `gatsby-remark-images-contentful`,
                        options: {
                            // It's important to specify the maxWidth (in pixels) of
                            // the content container as this plugin uses this as the
                            // base for generating different widths of each image.
                            maxWidth: 664
                        }
                    }
                ]
            }
        }
        // this (optional) plugin enables Progressive Web App + Offline functionality
        // To learn more, visit: https://gatsby.dev/offline
        // `gatsby-plugin-offline`,
    ]
}

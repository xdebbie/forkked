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
        },
        {
            resolve: 'gatsby-source-mongodb',
            options: {
                dbName: 'albums',
                collection: 'pitchfork',
                connectionString: `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@${process.env.MONGO_SERVER}.oupso.azure.mongodb.net/albums`,
                extraParams: {
                    replicaSet: 'Cluster0-shard-0',
                    ssl: true,
                    authSource: 'admin',
                    retryWrites: true
                },
                preserveObjectIds: true,
                clientOptions: {
                    useNewUrlParser: true,
                    useUnifiedTopology: true
                }
            }
        },
        {
            resolve: 'gatsby-plugin-local-search',
            options: {
                // A unique name for the search index. This should be descriptive of
                // what the index contains. This is required.
                name: 'scores',

                // Set the search engine to create the index. This is required.
                // The following engines are supported: flexsearch, lunr
                engine: 'flexsearch',

                // Provide options to the engine. This is optional and only recommended
                // for advanced users.
                //
                // Note: Only the flexsearch engine supports options.
                engineOptions: 'speed',

                // GraphQL query used to fetch all data for the search index. This is
                // required.
                query: `
          {
            allMongodbAlbumsPitchfork(limit:22000, sort: {fields: score, order: ASC}) {
              totalCount
              nodes {
                id
                artwork
                score
                artist
                album
                label
                year
                genre
                pubdate
                url
                title
                mongodb_id
              }
            }
          }
        `,

                // Field used as the reference value for each document.
                // Default: 'id'.
                ref: 'id',

                // List of keys to index. The values of the keys are taken from the
                // normalizer function below.
                // Default: all fields
                index: [
                    'artwork',
                    'score',
                    'artist',
                    'album',
                    'label',
                    'year',
                    'genre',
                    'pubdate',
                    'url',
                    'title',
                    'mongodb_id'
                ],

                // List of keys to store and make available in your UI. The values of
                // the keys are taken from the normalizer function below.
                // Default: all fields
                store: [
                    'id',
                    'artwork',
                    'score',
                    'artist',
                    'album',
                    'label',
                    'year',
                    'genre',
                    'pubdate',
                    'url'
                ],

                // Function used to map the result from the GraphQL query. This should
                // return an array of items to index in the form of flat objects
                // containing properties to index. The objects must contain the `ref`
                // field above (default: 'id'). This is required.
                normalizer: ({ data }) =>
                    data.allMongodbAlbumsPitchfork.nodes.map(node => ({
                        id: node.id,
                        artwork: node.artwork,
                        artist: node.artist,
                        album: node.album,
                        label: node.label,
                        year: node.year,
                        url: node.url,
                        score: node.score,
                        genre: node.genre,
                        pubdate: node.pubdate
                    }))
            }
        }
        // Local search plugin
        // this (optional) plugin enables Progressive Web App + Offline functionality
        // To learn more, visit: https://gatsby.dev/offline
        // `gatsby-plugin-offline`,
    ]
}

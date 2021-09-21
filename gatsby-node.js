/**
 * Implement Gatsby's Node APIs in this file.
 */

const path = require(`path`)
const { resolve } = require('path')

const makeRequest = (graphql, request) =>
    new Promise((resolve, reject) => {
        // query for nodes to use in creating the pages
        resolve(
            graphql(request).then(result => {
                if (result.errors) {
                    reject(result.errors)
                }
                return result
            })
        )
    })

exports.sourceNodes = ({ actions }) => {
    actions.createTypes(`
        type mongodbAlbumsPitchfork implements Node @dontInfer {
            id: JSON
            artwork: JSON
            score: JSON
            artist: JSON
            album: JSON
            label: JSON
            year: JSON
            genre: JSON
            pubdate: JSON
            url: JSON
            title: JSON
            mongodb_id: JSON
        }
    `)
}

// Here we implement gatsby's API "createPages". this is called once the data layer is bootstrapped to let plugins create pages from data
exports.createPages = ({ actions, graphql }) => {
    const { createPage } = actions

    // Creating the pages for each article { pagination }
    const getBlog = makeRequest(
        graphql,
        `
    {
        allContentfulBlog (
            sort: { fields: createdAt, order: DESC }
            filter: {
                node_locale: { eq: "en-US" }},)
        {
            edges {
                node {
                    id
                    slug
                }
            }
        }
    }
    `
    ).then(result => {
        result.data.allContentfulBlog.edges.forEach(({ node }) => {
            createPage({
                // I'm just creating the new page URL's being forkked.com/dumpster/slug (the slug I set already on Contentful)
                path: `dumpster/${node.slug}`,
                // change template here in case I change the name dumpster later on
                component: path.resolve(`src/templates/dumpster-article.js`),
                context: {
                    id: node.id
                }
            })
        })
    })

    // Create archive page for all articles, including pagination
    const getArchive = makeRequest(
        graphql,
        `
    {
        allContentfulBlog (
            sort: { fields: createdAt, order: DESC }
            filter: {
                node_locale: { eq: "en-US" }},)
        {
            edges {
                node {
                    id
                    slug
                }
            }
        }
    }
    `
    ).then(result => {
        const blogs = result.data.allContentfulBlog.edges
        // Articles per page that will be shown
        const blogsPerPage = 6
        const numPages = Math.ceil(blogs.length / blogsPerPage)

        // Array is the number of pages, and for each value "_" that it contains, it will create a page "i"
        Array.from({
            length: numPages
        }).forEach((_, i) => {
            createPage({
                /* This IF will analyse whether it is the first page (i === 0), if it is,
                 * then it will create the url path "archive". If it's not, it will find its position
                 * within the array (from the total number of pages, for example page 2, 3, etc).
                 * The skip parameter is to requery the GraphQL every time we have a new page, so for example,
                 * if the page is the second, then it will multiply i (1) times blogsPerPage (12), so it will
                 * skip the first 12 items and start querying from the 13th article
                 */

                path: i === 0 ? `/dumpster` : `/dumpster/${i + 1}`,
                component: path.resolve('./src/templates/archive.js'),
                context: {
                    limit: blogsPerPage,
                    skip: i * blogsPerPage,
                    numPages,
                    currentPage: i + 1
                }
            })
        })
    })

    // Create the "STAFF'S REJECTS" filtered page
    const getStaffsRejects = makeRequest(
        graphql,
        `
    {
        allContentfulBlog (
            sort: { fields: createdAt, order: DESC }
            filter: {
                node_locale: { eq: "en-US" }
                category: {elemMatch: {title: {eq: "Staff's rejects"}}}
            },)
        {
            edges {
                node {
                    id
                    slug
                }
            }
        }
    }
    `
    ).then(result => {
        const blogs = result.data.allContentfulBlog.edges
        // Articles per page that will be shown
        const blogsPerPage = 6
        const numPages = Math.ceil(blogs.length / blogsPerPage)

        Array.from({
            length: numPages
        }).forEach((_, i) => {
            createPage({
                path:
                    i === 0
                        ? `/category/staffs-rejects`
                        : `/category/staffs-rejects/${i + 1}`,
                component: path.resolve('./src/templates/staffs-rejects.js'),
                context: {
                    limit: blogsPerPage,
                    skip: i * blogsPerPage,
                    numPages,
                    currentPage: i + 1
                }
            })
        })
    })

    // Create the "WALL OF SHAME" filtered page
    const getWallOfShame = makeRequest(
        graphql,
        `
    {
        allContentfulBlog (
            sort: { fields: createdAt, order: DESC }
            filter: {
                node_locale: { eq: "en-US" }
                category: {elemMatch: {title: {eq: "Wall of shame"}}}
            },)
        {
            edges {
                node {
                    id
                    slug
                }
            }
        }
    }
    `
    ).then(result => {
        const blogs = result.data.allContentfulBlog.edges
        // Articles per page that will be shown
        const blogsPerPage = 6
        const numPages = Math.ceil(blogs.length / blogsPerPage)

        Array.from({
            length: numPages
        }).forEach((_, i) => {
            createPage({
                path:
                    i === 0
                        ? `/category/wall-of-shame`
                        : `/category/wall-of-shame/${i + 1}`,
                component: path.resolve('./src/templates/wall-of-shame.js'),
                context: {
                    limit: blogsPerPage,
                    skip: i * blogsPerPage,
                    numPages,
                    currentPage: i + 1
                }
            })
        })
    })

    // Create the "WORST NEW MUSIC" filtered page
    const getWorstNewMusic = makeRequest(
        graphql,
        `
    {
        allContentfulBlog (
            sort: { fields: createdAt, order: DESC }
            filter: {
                node_locale: { eq: "en-US" }
                category: {elemMatch: {title: {eq: "Worst new music"}}}
            },)
        {
            edges {
                node {
                    id
                    slug
                }
            }
        }
    }
    `
    ).then(result => {
        const blogs = result.data.allContentfulBlog.edges
        // Articles per page that will be shown
        const blogsPerPage = 6
        const numPages = Math.ceil(blogs.length / blogsPerPage)

        Array.from({
            length: numPages
        }).forEach((_, i) => {
            createPage({
                path:
                    i === 0
                        ? `/category/worst-new-music`
                        : `/category/worst-new-music/${i + 1}`,
                component: path.resolve('./src/templates/worst-new-music.js'),
                context: {
                    limit: blogsPerPage,
                    skip: i * blogsPerPage,
                    numPages,
                    currentPage: i + 1
                }
            })
        })
    })

    // Create the "OPINION" filtered page
    const getOpinion = makeRequest(
        graphql,
        `
    {
        allContentfulBlog (
            sort: { fields: createdAt, order: DESC }
            filter: {
                node_locale: { eq: "en-US" }
                category: {elemMatch: {title: {eq: "Opinion"}}}
            },)
        {
            edges {
                node {
                    id
                    slug
                }
            }
        }
    }
    `
    ).then(result => {
        const blogs = result.data.allContentfulBlog.edges
        // Articles per page that will be shown
        const blogsPerPage = 6
        const numPages = Math.ceil(blogs.length / blogsPerPage)

        Array.from({
            length: numPages
        }).forEach((_, i) => {
            createPage({
                path:
                    i === 0
                        ? `/category/opinion`
                        : `/category/opinion/${i + 1}`,
                component: path.resolve('./src/templates/opinion.js'),
                context: {
                    limit: blogsPerPage,
                    skip: i * blogsPerPage,
                    numPages,
                    currentPage: i + 1
                }
            })
        })
    })

    // Create the "OPINION" filtered page
    const getReviews = makeRequest(
        graphql,
        `
    {
        allContentfulBlog (
            sort: { fields: createdAt, order: DESC }
            filter: {
                node_locale: { eq: "en-US" }
                category: {elemMatch: {title: {eq: "Reviews"}}}
            },)
        {
            edges {
                node {
                    id
                    slug
                }
            }
        }
    }
    `
    ).then(result => {
        const blogs = result.data.allContentfulBlog.edges
        // Articles per page that will be shown
        const blogsPerPage = 6
        const numPages = Math.ceil(blogs.length / blogsPerPage)

        Array.from({
            length: numPages
        }).forEach((_, i) => {
            createPage({
                path:
                    i === 0
                        ? `/category/reviews`
                        : `/category/reviews/${i + 1}`,
                component: path.resolve('./src/templates/reviews.js'),
                context: {
                    limit: blogsPerPage,
                    skip: i * blogsPerPage,
                    numPages,
                    currentPage: i + 1
                }
            })
        })
    })

    return Promise.all([
        getBlog,
        getArchive,
        getStaffsRejects,
        getWallOfShame,
        getWorstNewMusic,
        getOpinion,
        getReviews
    ])
}

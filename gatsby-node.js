/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

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

// here we implement gatsby's API "createPages". this is called once the data layer is bootstrapped to let plugins create pages from data
exports.createPages = ({ actions, graphql }) => {
    const { createPage } = actions

    // now we create the pages for each article
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

    return Promise.all([getBlog])
}

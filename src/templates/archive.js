import React from 'react'
import { Link, graphql, navigate } from 'gatsby'
import { window } from 'browser-monads'
import Layout from '../components/layout'
import Nav from '../components/header/nav'
import SEO from '../components/seo'
import '../sass/main.scss'

import genHeaderImg from '../images/galaxy.png'

const Archive = props => {
    const blogContent = props.data.allContentfulBlog
    const { currentPage, numPages } = props.pageContext
    const isFirst = currentPage === 1
    const isLast = currentPage === numPages
    const prevPage =
        currentPage - 1 === 1 ? '/dumpster' : `/dumpster/${currentPage - 1}`
    const nextPage = `/blog/${currentPage + 1}`

    return (
        <Layout>
            <Nav />
        </Layout>
    )
}

export default Archive

/**
 * The "skip" and "limit" on the graphql is to parse the skip and limit values previously
 * declared on the gatsby-node.js file so the query can fetch the right data to insert in the
 * current archive page
 */

export const pageQuery = graphql`
    query ArchiveQuery($skip: Int!, $limit: Int!) {
        allContentfulBlog(
            sort: { fields: [createdAt], order: DESC }
            filter: { node_locale: { eq: "en-US" } }
            skip: $skip
            limit: $limit
        ) {
            edges {
                node {
                    id
                    slug
                    title
                    createdAt
                    category {
                        title
                        id
                    }
                    featuredImage {
                        fluid(maxWidth: 1200, quality: 100) {
                            src
                            ...GatsbyContentfulFluid
                        }
                    }
                }
            }
        }
    }
`

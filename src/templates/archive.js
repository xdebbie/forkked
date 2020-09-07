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
            <SEO
                title="Dumpster"
                keywords={[
                    'blog',
                    'forkked articles',
                    'articles',
                    'reviews',
                    'posts',
                    'blog posts'
                ]}
            />
            <Nav />
            <header>
                <div className="dumpster__section">
                    <div
                        className="dumpster__hero"
                        style={{ backgroundImage: `url(${genHeaderImg})` }}
                    ></div>
                    <div className="dumpster__nav">
                        <Link
                            to="/dumpster"
                            className={
                                window.location.href.indexOf('/dumpster') > 0
                                    ? 'dumpster__nav--link selected'
                                    : 'dumpster__nav--link'
                            }
                        >
                            Guide
                        </Link>
                        <Link
                            to="/category/staffs-rejects"
                            className={
                                window.location.href.indexOf(
                                    'category/staffs-rejects'
                                ) > 0
                                    ? 'dumpster__nav--link selected'
                                    : 'dumpster__nav--link'
                            }
                        >
                            {' '}
                            Staff's rejects{' '}
                        </Link>
                        <Link
                            to="/category/wall-of-shame"
                            className={
                                window.location.href.indexOf(
                                    'category/wall-of-shame'
                                ) > 0
                                    ? 'dumpster__nav--link selected'
                                    : 'dumpster__nav--link'
                            }
                        >
                            {' '}
                            Wall of shame{' '}
                        </Link>
                        <Link
                            to="/category/worst-new-music"
                            className={
                                window.location.href.indexOf(
                                    'category/worst-new-music'
                                ) > 0
                                    ? 'dumpster__nav--link selected'
                                    : 'dumpster__nav--link'
                            }
                        >
                            {' '}
                            Worst new music{' '}
                        </Link>
                        <Link
                            to="/category/opinion"
                            className={
                                window.location.href.indexOf(
                                    'category/opinion'
                                ) > 0
                                    ? 'dumpster__nav--link selected'
                                    : 'dumpster__nav--link'
                            }
                        >
                            {' '}
                            Opinion{' '}
                        </Link>
                        <Link
                            to="/category/reviews"
                            className={
                                window.location.href.indexOf(
                                    'category/reviews'
                                ) > 0
                                    ? 'dumpster__nav--link selected'
                                    : 'dumpster__nav--link'
                            }
                        >
                            {' '}
                            Reviews{' '}
                        </Link>
                    </div>
                </div>
            </header>

            <div className="feed">
                {blogContent.edges.map(edge => (
                    <div
                        key="{edge.node.id}"
                        className="card"
                        style={{
                            backgroundImage: `linear-gradient(
                            to bottom,
                            rgba(10, 10, 10, 0) 0%,
                            rgba(10, 10, 10, 0) 50%,
                            rgba(10, 10, 10, 0.7) 100%),
                            url(${edge.node.featuredImage.fluid.src})`
                        }}
                        onClick={() => navigate(`/dumpster/${edge.node.slug}`)}
                    >
                        {' '}
                        {edge.node.category.map(category => (
                            <p className="card__category">{category.title}</p>
                        ))}
                        <p className="card__title">{edge.node.title}</p>
                    </div>
                ))}
            </div>

            <div className="pagination">
                <div className="pagination__item">
                    {!isFirst && (
                        <Link to={prevPage} rel="prev">
                            <div className="arrow__back"></div>
                        </Link>
                    )}
                </div>
                <div className="pagination__item">
                    {!isLast && (
                        <Link to={nextPage} rel="next">
                            <div className="arrow__next"></div>
                        </Link>
                    )}
                </div>
            </div>
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

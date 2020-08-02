import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import SEO from '../components/seo'
import '../sass/main.scss'

// Import components
import Layout from '../components/layout'
import Nav from '../components/header/nav'

/** A NOTE ON THE CATEGORY QUERY
 * Category is an array, so on GraphQL it's queried nested just like
 * the other subfields but when calling the html, as it is an array,
 * we need to map the category first and then call the subquery title.
 */
const DumpsterTemplate = props => {
    return (
        <Layout>
            <SEO
                title={props.data.contentfulBlog.seoTitle}
                description={props.data.contentfulBlog.seoDescription}
                keywords={props.data.contentfulBlog.seoKeywords}
            />
            <Nav />
            <div className="dumpster__header">
                <div
                    className="dumpster__hero"
                    style={{
                        backgroundImage: `url(${props.data.contentfulBlog.featuredImage.fluid.src})`
                    }}
                ></div>
                <div className="dumpster__info">
                    <h1 className="dumpster__banner">
                        {props.data.contentfulBlog.bannerText}
                    </h1>
                </div>
            </div>
            <div className="dumpster__wrapper">
                <div className="dumpster__metadata">
                    <h2 className="dumpster__title">
                        {props.data.contentfulBlog.title}
                    </h2>
                    <div className="dumpster__meta">
                        <div className="dumpster__pubdate">
                            {props.data.contentfulBlog.pubDate}
                        </div>
                        {props.data.contentfulBlog.category.map(category => (
                            <div className="dumpster__category">
                                Archived in {category.title}
                            </div>
                        ))}
                        <div className="dumpster__subject">
                            {props.data.contentfulBlog.subject}
                        </div>
                    </div>
                </div>
                <div className="dumpster__content">
                    <div
                        dangerouslySetInnerHTML={{
                            __html: `${props.data.contentfulBlog.content.childMarkdownRemark.html}`
                        }}
                    />
                </div>
            </div>
        </Layout>
    )
}

export default DumpsterTemplate

// query to connect the id collected from the query to the context id from the gatsby-node.js
export const query = graphql`
    query DumpsterTemplate($id: String!) {
        contentfulBlog(id: { eq: $id }) {
            title
            bannerText
            id
            slug
            pubDate
            subject
            category {
                title
            }
            content {
                childMarkdownRemark {
                    html
                }
            }
            seoTitle
            seoDescription
            seoAuthor
            seoKeywords
            seoImage {
                fluid(maxWidth: 1200, quality: 100) {
                    ...GatsbyContentfulFluid
                    src
                }
            }
            featuredImage {
                fluid(maxWidth: 1200, quality: 100) {
                    ...GatsbyContentfulFluid
                    src
                }
            }
        }
    }
`

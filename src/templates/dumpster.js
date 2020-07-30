import React from 'react'
import { graphql } from 'gatsby'
import SEO from '../components/seo'
import '../sass/main.scss'

// Import components
import Layout from '../components/layout'
import Nav from '../components/header/nav'

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
                    <h1 className="dumpster__title">
                        {props.data.contentfulBlog.title}
                    </h1>
                </div>
            </div>
            <div className="dumpster__wrapper">
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
            id
            slug
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

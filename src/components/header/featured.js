/* --------------------------------------------
$  FEATURED CONTENT (HEADER)
 --------------------------------------------*/

import React from 'react'
import { graphql, navigate, StaticQuery } from 'gatsby'

export default () => (
    <StaticQuery
        query={graphql`
            query FeaturedQuery {
                allContentfulBlog(
                    limit: 1
                    sort: { fields: createdAt, order: DESC }
                    filter: {
                        node_locale: { eq: "en-US" }
                        featured: { eq: true }
                    }
                ) {
                    edges {
                        node {
                            id
                            slug
                            title
                            shortDescription
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
        `}
        render={data => (
            <header>
                {data.allContentfulBlog.edges.map(edge => (
                    <div key={edge.node.id} className="header__section">
                        <div
                            className="header__hero"
                            style={{
                                backgroundImage: `url(${edge.node.featuredImage.fluid.src})`
                            }}
                        ></div>
                        <div className="header__content">
                            <div className="header__info">
                                <h1 className="header__title">
                                    {edge.node.title}
                                </h1>
                                <p className="header__subtitle">
                                    {edge.node.shortDescription}
                                </p>
                                <button
                                    onClick={() =>
                                        navigate(`/dumpster/${edge.node.slug}`)
                                    }
                                    className="btn__med"
                                >
                                    Read More
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </header>
        )}
    />
)

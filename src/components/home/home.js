/* --------------------------------------------
$  MAIN CONTENT (HOME)
 --------------------------------------------*/
import React from 'react'
import { graphql, navigate, StaticQuery } from 'gatsby'

export default () => (
    <StaticQuery
        query={graphql`
            query HomeQuery {
                allContentfulBlog(
                    limit: 9
                    sort: { fields: createdAt, order: DESC }
                    filter: { node_locale: { eq: "en-US" }, home: { eq: true } }
                ) {
                    edges {
                        node {
                            id
                            slug
                            title
                            subject
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
        `}
        render={data => (
            <div className="feed">
                {data.allContentfulBlog.edges.map(edge => (
                    <div
                        key={edge.node.id}
                        className="card"
                        style={{
                            backgroundImage: `linear-gradient(
                            to bottom, 
                            rgba(10, 10, 10, 0) 0%,
                            rgba(10, 10, 10, 0.31) 60%,
                            rgba(10, 10, 10, 1) 100%),
                            url(${edge.node.featuredImage.fluid.src})`
                        }}
                        onClick={() => navigate(`/dumpster/${edge.node.slug}`)}
                    >
                        <p className="card__subject">{edge.node.subject}</p>
                        <p className="card__title">{edge.node.title}</p>
                    </div>
                    /*      for using categories instead of subject
                            {edge.node.category.map(category => (
                            <p className="card__category">{category.title}</p>
                        ))} */
                ))}
            </div>
        )}
    />
)

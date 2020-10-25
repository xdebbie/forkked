import React, { Component } from 'react'
import { graphql } from 'gatsby'
import SEO from '../components/seo'
import '../sass/main.scss'

// Import components
import Layout from '../components/layout'
import Nav from '../components/header/nav'
import SideDrawer from '../components/header/side-drawer'
import Backdrop from '../components/header/backdrop'
import FooterWeb from '../components/footer/footer-web'
import Tidal from '../assets/tidal.svg'
import Apple from '../assets/applemusic.svg'
import Spotify from '../assets/spotify.svg'
import Comments from '../components/disqus'

/** A NOTE ON THE CATEGORY QUERY
 * Category is an array, so on GraphQL it's queried nested just like
 * the other subfields but when calling the html, as it is an array,
 * we need to map the category first and then call the subquery title.
 */

class DumpsterTemplate extends Component {
    /** I use class + react component instead of const because
     * I'm using event listeners */

    // Adding constructor props to use props inside an extended class, note that we need to use "this.props" now
    constructor(props) {
        super(props)
        this.props = this.data
    }

    state = {
        sideDrawerOpen: false
    }

    drawerToggleClickHandler = () => {
        this.setState(prevState => {
            return { sideDrawerOpen: !prevState.sideDrawerOpen }
        })
    }

    backdropClickHandler = () => {
        this.setState({ sideDrawerOpen: false })
    }

    render() {
        let backdrop

        if (this.state.sideDrawerOpen) {
            backdrop = <Backdrop click={this.backdropClickHandler} />
        }

        return (
            <Layout>
                <SEO
                    title={this.props.data.contentfulBlog.seoTitle}
                    description={this.props.data.contentfulBlog.seoDescription}
                    keywords={this.props.data.contentfulBlog.seoKeywords}
                />
                <Nav drawerClickHandler={this.drawerToggleClickHandler} />
                <SideDrawer show={this.state.sideDrawerOpen} />
                {backdrop}
                <div className="dumpster__header">
                    <div
                        className="dumpster__hero"
                        style={{
                            backgroundImage: `url(${this.props.data.contentfulBlog.featuredImage.fluid.src})`
                        }}
                    ></div>
                    <div className="dumpster__info">
                        <h1 className="dumpster__banner">
                            {this.props.data.contentfulBlog.bannerText}
                        </h1>
                    </div>
                </div>
                <div className="dumpster__wrapper">
                    <div className="dumpster__container">
                        <h2 className="dumpster__title">
                            {this.props.data.contentfulBlog.title}
                        </h2>
                        <div className="dumpster__metadata">
                            <div className="dumpster__pubdate">
                                {this.props.data.contentfulBlog.pubDate}
                            </div>
                            {this.props.data.contentfulBlog.category.map(
                                category => (
                                    <div className="dumpster__category">
                                        Archived in{' '}
                                        <span>{category.title}</span>
                                    </div>
                                )
                            )}
                            <div className="dumpster__subject">
                                {this.props.data.contentfulBlog.subject}
                            </div>
                            <hr />
                        </div>
                    </div>
                    <div className="dumpster__content">
                        <div
                            dangerouslySetInnerHTML={{
                                __html: `${this.props.data.contentfulBlog.content.childMarkdownRemark.html}`
                            }}
                        />
                        <div className="stream__track">
                            Stream "
                            <span>
                                {this.props.data.contentfulBlog.streamTrack}
                            </span>
                            " now:
                        </div>
                        <div className="stream__links">
                            <a
                                className="stream__icon--link"
                                href={
                                    this.props.data.contentfulBlog.streamTidal
                                }
                                rel="noopener noreferrer"
                                target="_blank"
                            >
                                <Tidal className="stream__icon" />
                            </a>
                            <a
                                className="stream__icon--link"
                                href={
                                    this.props.data.contentfulBlog.streamApple
                                }
                                rel="noopener noreferrer"
                                target="_blank"
                            >
                                <Apple className="stream__icon" />
                            </a>
                            <a
                                className="stream__icon--link"
                                href={
                                    this.props.data.contentfulBlog.streamSpotify
                                }
                                rel="noopener noreferrer"
                                target="_blank"
                            >
                                <Spotify className="stream__icon" />
                            </a>
                        </div>
                    </div>
                    <hr />
                    <Comments />
                    <FooterWeb />
                </div>
            </Layout>
        )
    }
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
            streamApple
            streamSpotify
            streamTidal
            streamTrack
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

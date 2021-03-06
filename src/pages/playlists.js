import React, { Component } from 'react'
import SEO from '../components/seo'
import '../sass/main.scss'

// Import components
import Layout from '../components/layout'
import Nav from '../components/header/nav'
import SideDrawer from '../components/header/side-drawer'
import Backdrop from '../components/header/backdrop'
import headerImg from '../images/galaxy.png'
import Comments from '../components/disqus'

import FooterWeb from '../components/footer/footer-web'

class Playlists extends Component {
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
            <div className="wrapper">
                <Layout>
                    <SEO
                        title="Playlists"
                        keywords={[
                            'blog',
                            'forkked articles',
                            'articles',
                            'reviews',
                            'posts',
                            'blog posts',
                            'reviews',
                            'music',
                            'pop',
                            'playlists'
                        ]}
                    />
                    <Nav drawerClickHandler={this.drawerToggleClickHandler} />
                    <SideDrawer show={this.state.sideDrawerOpen} />
                    {backdrop}
                    <div className="page">
                        <header>
                            <div className="submit__header">
                                <div
                                    className="submit__hero"
                                    style={{
                                        backgroundImage: `url(${headerImg})`
                                    }}
                                ></div>
                            </div>
                        </header>
                        <div className="container">
                            <iframe
                                src="https://embed.tidal.com/albums/75413011"
                                frameBorder="0"
                                allowtransparency="true"
                                allow="encrypted-media"
                            ></iframe>
                            <iframe
                                src="https://embed.music.apple.com/us/playlist/ariana-grande-essentials/pl.942cc20e34a44f06bd36488e6c3e475e"
                                frameBorder="0"
                                allowtransparency="true"
                                allow="encrypted-media"
                            ></iframe>
                            <iframe
                                src="https://open.spotify.com/embed/playlist/37i9dQZF1DX4eRPd9frC1m"
                                frameBorder="0"
                                allowtransparency="true"
                                allow="encrypted-media"
                            ></iframe>
                        </div>
                    </div>
                    <Comments />
                    <FooterWeb />
                </Layout>
            </div>
        )
    }
}

export default Playlists

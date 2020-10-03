import React, { Component } from 'react'
import SEO from '../components/seo'
import '../sass/main.scss'

// Import components
import Layout from '../components/layout'
import Nav from '../components/header/nav'
import SideDrawer from '../components/header/side-drawer'
import Backdrop from '../components/header/backdrop'
import headerImg from '../images/galaxy.png'

import FooterWeb from '../components/footer/footer-web'

class Rankings extends Component {
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
                        title="Rankings"
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
                            'rankings'
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
                    </div>
                    <FooterWeb />
                </Layout>
            </div>
        )
    }
}

export default Rankings

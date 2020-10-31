import React, { Component } from 'react'
import { Link } from 'gatsby'
import SEO from '../components/seo'
import '../sass/main.scss'

// Import components
import Layout from '../components/layout'
import Nav from '../components/header/nav'
import SideDrawer from '../components/header/side-drawer'
import Backdrop from '../components/header/backdrop'
import Featured from '../components/header/featured'
import Home from '../components/home/home'
import Footer from '../components/footer/footer'

class IndexPage extends Component {
    /** I use class + react component instead of const because
     * I'm using event listeners */
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
        document.body.classList.remove('preventscroll')
    }

    render() {
        let backdrop

        if (this.state.sideDrawerOpen) {
            document.body.classList.add('preventscroll')
            backdrop = <Backdrop click={this.backdropClickHandler} />
        }

        return (
            <Layout>
                <SEO
                    title="Home"
                    keywords={[`forkked`, `music blog`, `pitchfork`]}
                />
                <Nav drawerClickHandler={this.drawerToggleClickHandler} />
                <SideDrawer show={this.state.sideDrawerOpen} />
                {backdrop}
                <Featured />
                <Home />
                <Link to="/dumpster" className="btn__more">
                    View More
                </Link>
                <Footer />
            </Layout>
        )
    }
}

export default IndexPage

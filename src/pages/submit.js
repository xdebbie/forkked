import React, { Component } from "react"
import SEO from "../components/seo"
import '../sass/main.scss'

// Import components
import Layout from '../components/layout'
import Nav from '../components/header/nav'
import SideDrawer from '../components/header/side-drawer'
import Backdrop from '../components/header/backdrop'
import FooterWeb from '../components/footer/footer-web'

class Submit extends Component {
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
                        backdrop = (
                            <Backdrop click={this.backdropClickHandler} />
                        )
                    }
                            return (
                                
                            )
        }
}
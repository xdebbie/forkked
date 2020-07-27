import React from 'react'
import { Link } from 'gatsby'
import SEO from '../components/seo'
import '../sass/main.scss'

// Import components
import Layout from '../components/layout'
import Nav from '../components/header/nav'
import Featured from '../components/header/featured'
import Home from '../components/home/home'
import Footer from '../components/footer/footer'

const IndexPage = () => (
    <Layout>
        <SEO title="Home" keywords={[`forkked`, `music blog`, `pitchfork`]} />
        <Nav />
        <Featured />
        <Home />
        <Link to="/dumpster" className="btn__more">
            View More
        </Link>
        <Footer />
    </Layout>
)

export default IndexPage

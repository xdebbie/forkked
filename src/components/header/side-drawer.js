import React from 'react'
import { Link } from 'gatsby'
import galaxy from '../../images/galaxy.png'
import Facebook from '../../assets/facebook.svg'
import Instagram from '../../assets/instagram.svg'
import Twitter from '../../assets/twitter.svg'
import AppleSM from '../../assets/applemusic-small.svg'
import TidalSM from '../../assets/tidal-small.svg'
import SpotifySM from '../../assets/spotify-small.svg'

const SideDrawer = props => {
    let drawerClasses = 'side__drawer'
    if (props.show) {
        drawerClasses = 'side__drawer open'
    }
    return (
        <nav
            className={drawerClasses}
            style={{
                backgroundImage: `linear-gradient(
                to bottom, 
                rgba(10, 10, 10, 0.6) 0%,
                rgba(10, 10, 10, 0.57) 50%,
                rgba(10, 10, 10, 0.44) 60%,
                rgba(10, 10, 10, 0.28) 100%),
                url(${galaxy})`
            }}
        >
            <div className="side__logo">
                <h1>Forkked</h1>
            </div>
            <ul className="side__items">
                <li>
                    <a href="/">Home</a>
                </li>
                <li>
                    <a href="/">Reviews</a>
                </li>
                <li>
                    <a href="/">Worst new music</a>
                </li>
                <li>
                    <a href="/">Staff's rejects</a>
                </li>
                <li>
                    <a href="/submit">Submit a request</a>
                </li>
                <li>
                    <a href="/">Rankings</a>
                </li>
                <li>
                    <a href="/">Playlists</a>
                </li>
                <li>
                    <a href="/dumpster">Dumpster</a>
                </li>
            </ul>
            <hr />
            <ul className="side__social">
                <a className="side__social--link" href="/">
                    <Facebook className="side__social--icon" />
                </a>
                <a className="side__social--link" href="/">
                    <Instagram className="side__social--icon" />
                </a>
                <a className="side__social--link" href="/">
                    <Twitter className="side__social--icon" />
                </a>
                <a className="side__social--link" href="/">
                    <AppleSM className="side__music--icon" />
                </a>
                <a className="side__social--link" href="/">
                    <TidalSM className="side__music--icon" />
                </a>
                <a className="side__social--link" href="/">
                    <SpotifySM className="side__music--icon" />
                </a>
            </ul>
            <hr />
            <ul className="side__legal">
                <li>
                    <a href="/">Newsletter</a>
                </li>
                <li>
                    <a href="/">Advertising</a>
                </li>
                <li>
                    <a href="/">Reprint/permissions</a>
                </li>
                <li>
                    <a href="/">Contact</a>
                </li>
            </ul>
            <div className="side__disclaimer">
                <p>
                    © 2020 forkked. All rights reserved. All content belonging
                    to © Condé Nast is accordingly credited.
                </p>
            </div>
        </nav>
    )
}

export default SideDrawer

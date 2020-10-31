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
        <nav className={drawerClasses}>
            <div
                className="side__logo"
                style={{
                    backgroundImage: `
                url(${galaxy})`
                }}
            >
                <h1>Forkked</h1>
            </div>
            <ul className="side__items">
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/dumpster">Dumpster</Link>
                </li>
                <li>
                    <Link to="/playlists">Playlists</Link>
                </li>
                <li>
                    <Link to="/rankings">Rankings</Link>
                </li>
                <li>
                    <Link to="/submit">Submit a request</Link>
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
                    <Link to="/">Newsletter</Link>
                </li>
                <li>
                    <Link to="/">Advertising</Link>
                </li>
                <li>
                    <Link to="/">Reprint/permissions</Link>
                </li>
                <li>
                    <Link to="/">Contact</Link>
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

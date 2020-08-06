import React from 'react'
import { Link } from 'gatsby'
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
                    <a href="/">Wall of shame</a>
                </li>
                <li>
                    <a href="/">Rankings</a>
                </li>
                <li>
                    <a href="/">Playlists</a>
                </li>
                <li>
                    <a href="/">Dumpster</a>
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
            <div className="side__disclaimer">
                <p>
                    © 2020 forkked. All rights reserved. Use of and/or
                    registration on any portion of this site constitutes
                    acceptance of our User Agreement (updated 1/1/20) and
                    Privacy Policy and Cookie Statement (updated 1/1/20). The
                    material on this site may not be reproduced, distributed,
                    transmitted, cached or otherwise used, except with prior
                    written permission of forkked. All content of © Condé Nast
                    is accordingly credited.
                </p>
            </div>
        </nav>
    )
}

export default SideDrawer

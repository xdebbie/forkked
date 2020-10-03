/* --------------------------------------------
$  NAV (HEADER)
 --------------------------------------------*/

import React from 'react'
import { Link } from 'gatsby'
import { window } from 'browser-monads'
import Logo from '../../assets/logo.svg'
import DrawerToggleButton from '../header/drawer-toggle'

const Nav = props => (
    <nav>
        <div className="nav__items">
            <div className="toggle__button">
                <DrawerToggleButton click={props.drawerClickHandler} />
            </div>
            <a className="nav__item--left" href="/">
                <Logo className="nav__item--logo" />
                <span>Forkked</span>
            </a>
            <Link
                className={
                    // BLOG (DUMPSTER)
                    window.location.href.indexOf('dumpster') > 0 ||
                    window.location.href.indexOf('category') > 0
                        ? 'nav__item--link active'
                        : 'nav__item--link'
                }
                to="/dumpster"
            >
                Dumpster
            </Link>
            <Link
                className={
                    // WORST NEW MUSIC
                    window.location.href.indexOf('playlists') > 0
                        ? 'nav__item--link active'
                        : 'nav__item--link'
                }
                to="/playlists"
            >
                Playlists
            </Link>
            <Link
                className={
                    // RANKINGS
                    window.location.href.indexOf('rankings') > 0
                        ? 'nav__item--link active'
                        : 'nav__item--link'
                }
                to="/rankings"
            >
                Rankings
            </Link>
            <Link
                className={
                    // WALL OF SHAME
                    window.location.href.indexOf('submit') > 0
                        ? 'nav__item--link active'
                        : 'nav__item--link'
                }
                to="/submit"
            >
                Submit a request
            </Link>
        </div>
    </nav>
)

export default Nav

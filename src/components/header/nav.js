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
                    // does the reviews page exists in this URL, if yes the active class is set, if not then no active class
                    // REVIEWS
                    window.location.href.indexOf('reviews') > 0
                        ? 'nav__item--link active'
                        : 'nav__item--link'
                }
                to="/reviews"
            >
                Reviews
            </Link>
            <Link
                className={
                    // WORST NEW MUSIC
                    window.location.href.indexOf('worst-new-music') > 0
                        ? 'nav__item--link active'
                        : 'nav__item--link'
                }
                to="/worst-new-music"
            >
                Worst new music
            </Link>
            <Link
                className={
                    // STAFF'S REJECTS
                    window.location.href.indexOf('staffs-rejects') > 0
                        ? 'nav__item--link active'
                        : 'nav__item--link'
                }
                to="/staffs-rejects"
            >
                Staff's rejects
            </Link>
            <Link
                className={
                    // WALL OF SHAME
                    window.location.href.indexOf('wall-of-shame') > 0
                        ? 'nav__item--link active'
                        : 'nav__item--link'
                }
                to="/wall-of-shame"
            >
                Wall of shame
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
        </div>
    </nav>
)

export default Nav

import React from 'react'

const SideDrawer = props => {
    let drawerClasses = 'side__drawer'
    if (props.show) {
        drawerClasses = 'side__drawer open'
    }
    return (
        <nav className={drawerClasses}>
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
            <ul className="side__social">
                <li>
                    <a href="/">Facebook</a>
                </li>
                <li>
                    <a href="/">Instagram</a>
                </li>
                <li>
                    <a href="/">Twitter</a>
                </li>
                <li>
                    <a href="/">Tidal</a>
                </li>
                <li>
                    <a href="/">Apple Music</a>
                </li>
                <li>
                    <a href="/">Spotify</a>
                </li>
            </ul>
        </nav>
    )
}

export default SideDrawer

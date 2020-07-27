/* --------------------------------------------
$  FOOTER
 --------------------------------------------*/
import React from 'react'
import { Link } from 'gatsby'
import footer from '../../images/galaxy.png'
import facebook from '../../images/facebook.svg'
import instagram from '../../images/instagram.svg'
import twitter from '../../images/twitter.svg'
import apple_small from '../../images/applemusic-small.svg'
import tidal_small from '../../images/tidal-small.svg'
import spotify_small from '../../images/spotify-small.svg'

const Footer = () => {
    return (
        <div className="footer">
            <div
                className="footer__hero"
                style={{
                    backgroundImage: `linear-gradient(
                to bottom, 
                rgba(10, 10, 10, 1) 0%,
                rgba(10, 10, 10, 0.57) 50%,
                rgba(10, 10, 10, 0.44) 60%,
                rgba(10, 10, 10, 0.28) 100%),
                url(${footer})`
                }}
            ></div>
            <nav>
                <div className="footer__items">
                    <Link className="footer__item--link" to="/newsletter">
                        Newsletter
                    </Link>
                    <Link className="footer__item--link" to="/legal">
                        Reprint/Permissions
                    </Link>
                    <Link className="footer__item--link" to="/advertising">
                        Advertising
                    </Link>
                    <Link className="footer__item--link" to="/contact">
                        Contact
                    </Link>
                </div>
                <div className="social__icons">
                    <a className="social__icon--link" href="/">
                        <img
                            src={facebook}
                            alt="facebook - forkked"
                            className="social__icon"
                        />
                    </a>
                    <a className="social__icon--link" href="/">
                        <img
                            src={instagram}
                            alt="instagram - forkked"
                            className="social__icon"
                        />
                    </a>
                    <a className="social__icon--link" href="/">
                        <img
                            src={twitter}
                            alt="twitter - forkked"
                            className="social__icon"
                        />
                    </a>
                    <a className="social__icon--link" href="/">
                        <img
                            src={apple_small}
                            alt="apple music - forkked"
                            className="social--music__icon"
                        />
                    </a>
                    <a className="social__icon--link" href="/">
                        <img
                            src={tidal_small}
                            alt="tidal - forkked"
                            className="social--music__icon"
                        />
                    </a>
                    <a className="social__icon--link" href="/">
                        <img
                            src={spotify_small}
                            alt="spotify - forkked"
                            className="social--music__icon"
                        />
                    </a>
                </div>
                <div className="disclaimer">
                    <p>
                        © 2020 forkked. All rights reserved. Use of and/or
                        registration on any portion of this site constitutes
                        acceptance of our User Agreement (updated 1/1/20) and
                        Privacy Policy and Cookie Statement (updated 1/1/20).
                        The material on this site may not be reproduced,
                        distributed, transmitted, cached or otherwise used,
                        except with prior written permission of forkked. All
                        content of © Condé Nast is accordingly credited.
                    </p>
                </div>
            </nav>
        </div>
    )
}

export default Footer

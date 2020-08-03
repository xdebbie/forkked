/* --------------------------------------------
$  FOOTER
 --------------------------------------------*/
import React from 'react'
import { Link } from 'gatsby'
import footer from '../../images/galaxy.png'
import Facebook from '../../assets/facebook.svg'
import Instagram from '../../assets/instagram.svg'
import Twitter from '../../assets/twitter.svg'
import AppleSM from '../../assets/applemusic-small.svg'
import TidalSM from '../../assets/tidal-small.svg'
import SpotifySM from '../../assets/spotify-small.svg'

const FooterWeb = () => {
    return (
        <div className="footer">
            <div
                className="footer__web--hero"
                style={{
                    backgroundImage: `
                url(${footer})`
                }}
            ></div>
            <nav className="nav__footer--web">
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
                        <Facebook className="social__icon" />
                    </a>
                    <a className="social__icon--link" href="/">
                        <Instagram className="social__icon" />
                    </a>
                    <a className="social__icon--link" href="/">
                        <Twitter className="social__icon" />
                    </a>
                    <a className="social__icon--link" href="/">
                        <AppleSM className="social--music__icon" />
                    </a>
                    <a className="social__icon--link" href="/">
                        <TidalSM className="social--music__icon" />
                    </a>
                    <a className="social__icon--link" href="/">
                        <SpotifySM className="social--music__icon" />
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

export default FooterWeb

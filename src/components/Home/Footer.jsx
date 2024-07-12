import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import './Footer.css'; // Import custom CSS for Footer component

export const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__container">
                <div className="footer__navigation">
                    <ul className="footer__nav-links">
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </div>
                <div className="footer__social">
                    <ul className="footer__social-icons">
                        <li><a href="#"><FontAwesomeIcon icon={faFacebook} /></a></li>
                        <li><a href="#"><FontAwesomeIcon icon={faTwitter} /></a></li>
                        <li><a href="#"><FontAwesomeIcon icon={faInstagram} /></a></li>
                    </ul>
                </div>
                <div className="footer__legal">
                    <p>&copy; 2024 Your E-commerce App. All rights reserved.</p>
                    <p>Terms of Service | Privacy Policy</p>
                </div>
            </div>
        </footer>
    );
}

// export default Footer;

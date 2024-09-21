import React from 'react'
import './footer.css'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer_container container">
                <h1 className="footer_title">Fredrick</h1>

                <ul className="footer_list">
                    <li>
                        <a href="#home" className="footer_link">About</a>
                    </li>

                    <li>
                        <a href="#skills" className="footer_link">Skills</a>
                    </li>

                    <li>
                        <a href="#portfolio" className="footer_link">Portfolio</a>
                    </li>
                </ul>

                <div className="footer_social">
                    <a href="https://x.com/iamILIBID" className="footer_social-link" target='_blank' rel="noreferrer noopener">
                        <i className="bx bxl-twitter"></i>
                    </a>
                    <a href="https://www.instagram.com/frai.dee/" className="footer_social-link" target='_blank' rel="noreferrer noopener">
                        <i className="bx bxl-instagram"></i>
                    </a>
                    <a href="https://www.linkedin.com/in/fredrick-okafor" className="footer_social-link" target='_blank' rel="noreferrer noopener">
                        <i className="bx bxl-linkedin"></i>
                    </a>
                </div>

                <span className="footer_copy">&copy; {new Date().getFullYear()}. All rights reserved</span>
            </div>
        </footer>
    )
}

export default Footer
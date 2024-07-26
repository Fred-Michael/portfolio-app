import React from 'react'
import './portfolio.css'

const Portfolio = () => {
    return (
        <section className="services section" id="portfolio">
            <h2 className="section_title">Portfolio</h2>

            <div className="services_container container grid">
                <div className="services_content">
                    <h3 className="services_title">MOVIE SEARCH APP</h3>
                    <p className="services_modal-description">A movie web application built with React.js, that makes use of the <b>IMDB API</b> to publish movie details. You can also search for movies of your choice</p>

                    <a href='https://movieappsearch.netlify.app/' target='_blank' rel="noopener noreferrer" className="services_button">View app <i className="uil uil-arrow-right services_button-icon"></i></a>
                </div>

                <div className="services_content">
                    <h3 className="services_title">IPHONE WEB APP</h3>
                    <p className="services_modal-description">iPhone 15 Pro clone app. Built with React.js, this animated web application shows the all-new iPhone 15 Pro, with built-in 3D exploration of the phone, as well as every detail pertaining to its performance that you need to know</p>

                    <a href='https://victorious-bay-0d2fcc50f.5.azurestaticapps.net/' target='_blank' rel='noopener noreferrer' className='services_button'>View app <i className='uil uil-arrow-right services_button-icon'></i></a>
                </div>

                <div className="services_content">
                    <h3 className="services_title">PORTFOLIO 3</h3>
                    <p className="services_modal-description">Coming soon...</p>
                </div>

                <div className="services_content">
                    <h3 className="services_title">PORTFOLIO 4</h3>
                    <p className="services_modal-description">Coming soon...</p>
                </div>

                <div className="services_content">
                    <h3 className="services_title">PORTFOLIO 5</h3>
                    <p className="services_modal-description">Coming soon...</p>
                </div>

                <div className="services_content">
                    <h3 className="services_title">PORTFOLIO 6</h3>
                    <p className="services_modal-description">Coming soon...</p>
                </div>

                <div className="services_content">
                    <h3 className="services_title">PORTFOLIO 7</h3>
                    <p className="services_modal-description">Coming soon...</p>
                </div>

                <div className="services_content">
                    <h3 className="services_title">PORTFOLIO 8</h3>
                    <p className="services_modal-description">Coming soon...</p>
                </div>
            </div>
        </section>
    )
}

export default Portfolio
import React from 'react'
import './portfolio.css'

const Portfolio = () => {
    return (
        <section className="services section" id="portfolio">
            <h2 className="section_title">Portfolio</h2>

            <div className="services_container container grid">
                <div className="services_content">
                    <h3 className="services_title">MOVIE SEARCH APP</h3>
                    <p className="services_modal-description">A movie web application <b>built with React.js</b>, that makes use of the IMDB API to publish movie details. You can also search for movies of your choice</p>

                    <a href='https://movieappsearch.netlify.app/' target='_blank' rel="noopener noreferrer" className="services_button">View app <i className="uil uil-arrow-right services_button-icon"></i></a>
                </div>

                <div className="services_content">
                    <h3 className="services_title">IPHONE WEB APP</h3>
                    <p className="services_modal-description"><b>Built with React.js</b>, this animated web application shows the all-new iPhone 15 Pro, with built-in 3D exploration of the phone, showing you all details that you need to know</p>

                    <a href='https://victorious-bay-0d2fcc50f.5.azurestaticapps.net/' target='_blank' rel='noopener noreferrer' className='services_button'>View app <i className='uil uil-arrow-right services_button-icon'></i></a>
                </div>

                <div className="services_content">
                    <h3 className="services_title">BRAINWAVE</h3>
                    <p className="services_modal-description"><b>Built with React.js</b>, this AI-themed web application shows the work of an AI company called Brainwave, detailing their services and the subscriptions involved</p>

                    <a href='https://lively-forest-00bedce0f.5.azurestaticapps.net' target='_blank' rel='noopener noreferrer' className='services_button'>View app <i className='uil uil-arrow-right services_button-icon'></i></a>
                </div>

                <div className="services_content">
                    <h3 className="services_title">VETEMENTS STORE</h3>
                    <p className="services_modal-description"><b>Built with Angular</b>, this e-commerce web application showcases different items for sale, and simulates integration with Stripe. For testing purposes, USE DUMMY CARD ONLY!</p>

                    <a href='https://ambitious-dune-06392b30f.5.azurestaticapps.net/' target='_blank' rel='noopener noreferrer' className='services_button'>View app <i className='uil uil-arrow-right services_button-icon'></i></a>
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
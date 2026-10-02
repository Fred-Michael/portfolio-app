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
                    <p className="services_modal-description">This AI-themed web application shows the work of an AI company called Brainwave, detailing their services and the subscriptions involved. It is <b>built with React.js</b></p>

                    <a href='https://lively-forest-00bedce0f.5.azurestaticapps.net' target='_blank' rel='noopener noreferrer' className='services_button'>View app <i className='uil uil-arrow-right services_button-icon'></i></a>
                </div>

                <div className="services_content">
                    <h3 className="services_title">VWITTER</h3>
                    <p className="services_modal-description">A sleek yet simple Twitter clone <b>built with Vue.js</b> and the Quasar framework. You can post, delete and like a vweet</p>

                    <a href='https://yellow-desert-0d9b90d0f.5.azurestaticapps.net' target='_blank' rel='noopener noreferrer' className='services_button'>View app <i className='uil uil-arrow-right services_button-icon'></i></a>
                </div>

                <div className="services_content">
                    <h3 className="services_title">INVOICE APP</h3>
                    <p className="services_modal-description">A beautifully designed invoice application <b>built with Vue.js</b> and firebase that helps in managing invoice generation, updates, and deletion</p>

                    <a href='https://invoicer-gen.netlify.app/' target='_blank' rel='noopener noreferrer' className='services_button'>View app <i className='uil uil-arrow-right services_button-icon'></i></a>
                </div>

                <div className="services_content">
                    <h3 className="services_title">DASHBOARD UI</h3>
                    <p className="services_modal-description">This is a sleek UI <b>built with WPF</b> showing a beautifully designed Dashboard with some key metrics</p>

                    <a href='https://github.com/Fred-Michael/dashboardUI' target='_blank' rel='noopener noreferrer' className='services_button'>View app <i className='uil uil-arrow-right services_button-icon'></i></a>
                </div>
            </div>
        </section>
    )
}

export default Portfolio
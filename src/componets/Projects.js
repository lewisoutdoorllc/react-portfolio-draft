import React from 'react'

function Projects() {
    return (
        <div className="flex flex-col justify-center items-center">
            <h2><a name="projects">Projects</a></h2>
            <hr className="rule-2"></hr>

            <div className="project-container">

                <div className="project-card">
                    <img src="../images/shop-shop-screenshot.png" alt="Cody"></img>
                    <a href="https://github.com/lewisoutdoorllc/shop-shop" target="_blank" rel="noopener noreferrer">Ecommerce</a>
                    <ul>
                        <li>○React</li>
                        <li>○JWT</li>
                        <li>○State</li>
                        <li>○Stripe</li>
                    </ul>
                </div>

                <div className="project-card">
                    <img src="../images/book-screenShot.png" alt="Cody"></img>
                    <a href="https://github.com/lewisoutdoorllc/MERN_book_search" target="_blank" rel="noopener noreferrer">Book Search</a>
                    <ul>
                        <li>○GraphQL</li>
                        <li>○Apollo</li>
                        <li>○React</li>
                        <li>○Heroku</li>
                    </ul>
                </div>

                <div className="project-card">
                    <img src="../images/hulu-clone-screenshot.png" alt="Cody"></img>
                    <a href="https://github.com/lewisoutdoorllc/tailwind-hulu-clone" target="blank" rel="noopener noreferrer">Hulu Clone</a>
                    <ul>
                        <li>○GraphQL</li>
                        <li>○Apollo</li>
                        <li>○React</li>
                        <li>○Tailwinds CSS</li>
                    </ul>
                    <a href="https://www.lewishuluclone.com/" target="_blank" rel="noopener noreferrer">Live Site</a>
                </div>

                <div className="project-card">
                    <img src="../images/readme-generator-screenshot.png" alt="Cody"></img>
                    <a href="https://github.com/lewisoutdoorllc/custom-readme-generator" target="_blank">README Generator</a>
                    <ul>
                        <li>○React</li>
                        <li>○Apollo</li>
                        <li>○React</li>
                        <li>○Heroku</li>
                    </ul>
                </div>

            </div>
        </div>
    )
}

export default Projects
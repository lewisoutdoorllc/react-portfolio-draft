import React from 'react'
import { AiFillGithub, AiFillAppstore } from 'react-icons/ai'

let projects = [
    {
        title: "Shop Shop",
        image: "../images/shop-shop-screenshot.png",
        github: "https://github.com/lewisoutdoorllc/shop-shop",
        live: "https://lewis-shop-shop.herokuapp.com/",
    },
    {
        title: "Tech Blog",
        image: "../images/tech_blog.gif",
        github: "https://github.com/lewisoutdoorllc/tech-blog",
        live: "https://stark-stream-49625.herokuapp.com/"
    },
    {
        title: "Hulu Clone",
        image: "../images/hulu-clone-screenshot.png",
        github: "https://github.com/lewisoutdoorllc/tailwind-hulu-clone",
        live: "https://www.lewishuluclone.com/",
    },
    {
        title: "README Generator",
        image: "../images/readme-generator-screenshot.png",
        github: "https://github.com/lewisoutdoorllc/custom-readme-generator",
        live: "https://github.com/lewisoutdoorllc/custom-readme-generator",
    },
    {
        title: "PWA Budget Tracker",
        image: "../images/pwa-budget-tracker-ss.png",
        github: "https://github.com/lewisoutdoorllc/PWA_budget_tracker",
        live: "https://lewis-pwa-budget-tracker.herokuapp.com/",
    },
    {
        tilte: "Sports Buzz",
        image: "../images/sportsbuzz-ss.png",
        github: "https://github.com/mrhumpherys/social-sports",
        live: "https://sports-buzz.herokuapp.com/"
    },
]


function Projects() {
    return (
        <div className="">

            <div name="projects" className="flex flex-col justify-center items-center">
                <h2 className="">Projects</h2>
                {/* <h2><a name="projects">Projects</a></h2> */}
                <hr className="rule-2"></hr>
            </div>

            <div className="flex justify-center items-center">
                <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-8 mx-8 my-8">
                    {projects.map((project, index) => {
                        return <div key={index} className="project-card">
                            <img src={project.image} alt={project.title}></img>
                            <p>{project.title}</p>
                            <div className="flex justify-evenly items-center flex-row pt-3 w-1/4">
                                <a href={project.github} target="blank"><AiFillGithub className="w-7 h-7 github-btn"/></a>
                                <a href={project.live} target="blank"><AiFillAppstore className="w-7 h-7 app-btn" /></a>
                            </div>
                        </div>
                    }
                    )}
                </div>
            </div>
        </div>
    )
}

export default Projects
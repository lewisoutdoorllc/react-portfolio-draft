import React from 'react';
import { Link } from 'react-scroll';



function Navbar() {
    return (
        <div>
            <nav className="navbar">
                <ul>
                    <Link activeClass="active" className="navbar" to="about" spy={true} smooth={true} duration={500} offset={-70}>About</Link>
                    <Link activeClass="active" className="navbar" to="experience" spy={true} smooth={true} duration={500} offset={-70}>Experience</Link>
                    <Link activeClass="active" className="navbar" to="hobbies" spy={true} smooth={true} duration={500} offset={-70}>Hobbies</Link>
                    <Link activeClass="active" className="navbar" to="projects" spy={true} smooth={true} duration={500} offset={-70}>Projects</Link>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar
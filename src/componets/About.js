import React from 'react'

function About() {
    return (
        <div name="about" className="flex flex-col justify-center items-center">
            <img className="profile-pic" src="images/IMG_9994 (1).jpg" alt="Cody"></img>
            <h1 className="programmer-name">Cody Lewis</h1>
            <hr className="rule-2"></hr>
            <p className="profile-description my-8 w-3/5">Hi there, my name is Cody and I am a full stack web developer. I love programming and
                helping build projects to help solve the problems of the world and individuals alike. Please feel free to continue
                reading further for highlights on my experiences, hobbies, and links to a few projects I have had the opportunity to
                make.</p>
            <hr></hr>
        </div>
    )
}

export default About
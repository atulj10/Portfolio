import "./index_about.css"
import Loader from "react-loaders"
import { useState, useEffect } from "react"
import { ClimbingBoxLoader } from "react-spinners"

function About() {

    const [loading, setLoading] = useState(false)
    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 2500)
    }, [])


    const skill = [["C", 100], ["C++", 60], ["Python", 60], ["React", 70], ["JavaScript", 75], ["Node JS", 75], ["PostgreSQL", 85]]
    const sk = [1, 2, 3, 34, 5]

    function Skill(arr) {
        return (
            <div class="skill">
                <div class="d-flex justify-content-end me-2">
                    <h3 class="skill-name fs-2">{arr[0]}</h3>
                </div>
                <div class="level" style={{ width: arr[1] + "%" }}>
                    <p class="percent mt-1 me-3 fs-6">{arr[1] + "%"}</p>
                </div>
            </div>
        )
    }

    return (
        <>{
            loading?
            <ClimbingBoxLoader class="loader" color="#36d7b7" size={25}/>
            :
            <div class="about_page">
                <div class="context">
                    <h1 class="fs-0 mb-2 ">Who am I?</h1>
                    <p class="fs-6 mt-4">Hey, there reader I'm Atul anand.
                        I'm a second year student of Indian Institute of Information Technology, Ranchi.I'm pursuing my B.Tech in ECE.
                        Right now I'm working on Developing skills I have completed Web Development which includes everything from basic HTML,CSS upto React, Nodejs and Authentication.
                        Now, I'm looking forward to work with someone in the real life secnarios. In the database part I have done the SQL and basics of the NoSQL types of DataBase.I'm also about to start the Web3.<br />Otherthan these skills I'm very adaaptive meaning its easy for me to switch in between techonology.
                        Since, I'm from a less IT background it's kinda my habbit to switch between technoology.</p>
                    <p class="fs-5 ms-4 ps-4"> Hope to work with you soon. </p>
                    <p class="fs-3 fw-bold ps-5 ms-5">THANK YOU!</p>
                    <hr class="sep-line"></hr>
                </div>
                <div class="skills">
                    {skill.map(Skill)}
                </div>
                <Loader type="pacman" />
            </div>}
        </>
    )
}

export default About;
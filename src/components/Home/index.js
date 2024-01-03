import "./index_home.css"
import Image from "../../assets/final_pic-removebg-preview.png"
import { useState, useEffect } from "react";
import { ClimbingBoxLoader } from "react-spinners";

function Home() {
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 2500)
    }, [])
    return (<>
        <div class="Homepage">
            {loading ?
                <ClimbingBoxLoader class="loader" color="#36d7b7" size={25} />
                :
                <div class="container">
                    <div class="content">
                        <div class="title ">
                            <h1 class="heading">Hi,
                                <br />
                                I'm Atul
                            </h1>
                        </div>
                        <div class="passage">
                            <p class="p1 ">Student | Web Developer | ........ </p>
                        </div>
                    </div>
                    <div class="image">
                        <img class="pic" src={Image} />
                    </div>
                </div>
            }
        </div>
    </>
    )
}

export default Home;
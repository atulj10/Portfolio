import "./index_contact.css"
import Loader from "react-loaders";
import { faGithub, faLinkedinIn, faInstagram, faGoogle } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { ClimbingBoxLoader } from "react-spinners";

function Contact() {

    const [loading, setLoading] = useState(false)
    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 2500)
    }, [])

    return (
        <>
            {
                loading ?
                    <ClimbingBoxLoader class="loader" color="#36d7b7" size={25} />
                    :
                    <div>
                        <div>
                            <h1 class="contact-title">We Should get in Touch <div class="easter-egg"><span class="emoji">🙂</span></div></h1>
                        </div>
                        <div class="row">
                            <div class="col-lg-3 md-6 sm-12">
                                <div class="card">
                                    <div class="card-body">
                                        <h5 class="card-title">Email</h5>
                                        <Link class="btn btn-lg btn-outline-dark" to="/form">
                                            <FontAwesomeIcon icon={faGoogle} />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-3 md-6 sm-12">
                                <div class="card">
                                    <div class="card-body">
                                        <h5 class="card-title">LinkedIn</h5>
                                        <a href="https://www.linkedin.com/in/atul-anand-a60941262/" class="btn btn-lg btn-outline-dark">
                                            <FontAwesomeIcon icon={faLinkedinIn} />
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-3 md-6 sm-12">
                                <div class="card">
                                    <div class="card-body">
                                        <h5 class="card-title">Github</h5>
                                        <a href="https://github.com/atulj10" class="btn btn-lg btn-outline-dark">
                                            <FontAwesomeIcon icon={faGithub} />
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-3 md-6 sm-12">
                                <div class="card">
                                    <div class="card-body">
                                        <h5 class="card-title">Instagram</h5>
                                        <a href="https://www.instagram.com/atulanandj10/?hl=en" class="btn btn-lg btn-outline-dark">
                                            <FontAwesomeIcon icon={faInstagram} />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            }
        </>
    )
}

export default Contact;
import { Link, NavLink } from "react-router-dom";
import "./index_nav.css"
import { faHome, faBriefcase, faFileText } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from "../../assets/logo-removebg-preview.png"
function navbar() {

    return (<>
        <nav class="container">
            <div >
                <Link to="/">
                    <img class="logo" src={logo} />
                </Link>
            </div>
            <div>
                <ul id="navbarToggleExternalContent" class=" nav nav-tabs navbar-collapse">
                    <li class="nav-item">
                        <NavLink className="home nav-link " to="/">
                            <FontAwesomeIcon class="icon-home" icon={faHome} />
                            <p>HOME</p>
                        </NavLink>
                    </li>
                    <li class="nav-item">
                        <NavLink className="about nav-link" to="/about">
                            <FontAwesomeIcon class="icon-about" icon={faFileText} />
                            <p>ABOUT</p>
                        </NavLink>
                    </li>
                    <li class="nav-item">
                        <NavLink className="contact nav-link" to="/contact">
                            <FontAwesomeIcon class="icon-envelope" icon={faBriefcase} />
                            <p>CONTACT</p>
                        </NavLink>
                    </li>
                </ul>
            </div>
        </nav>
        <hr />
    </>
    )
}

export default navbar;
import '../Assets/Css/Header.css';
import { NavLink } from 'react-router-dom';
import ieva from '../Assets/Images/ieva.jpg';

function Header() {

    return (
        <div >
            <nav className="navbar navbar-expand-md navbar-expand-lg navbar-light bg-dark">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon">
                        </span>
                    </button>
                    <div className="collapse navbar-collapse d-flex justify-content-center" id="navbarNav">
                        <ul className="navbar-nav">
                            <li>
                            <img className="home-picture animation2" src={ieva}/>
                            </li>
                            <li className="nav-item light">
                            <NavLink className="nav-link active home-circle" exact to="/">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link github-circle" href="https://github.com/vaivodeieva">Github</a>
                            </li>
                            <li className="nav-item">
                            <NavLink className="nav-link hobbies-circle" to="/hobbies">Hobbies</NavLink>
                            </li>
                            <li className="nav-item">
                            <NavLink className="nav-link contact-circle" to="/contact">Contact</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

        </div>
    )
}

export default Header;
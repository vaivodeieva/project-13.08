import { NavLink } from 'react-router-dom';
import {useState} from 'react';
import '../Assets/Css/Header.css';
import $ from 'jquery';
import ieva from '../Assets/Images/ieva.jpg';


$(document).ready(function () {
  
    $('nav-link')
            .click(function (e) {
        $('nav-link')
            .removeClass('active');
        $(this).addClass('active');
    });
});


function Header() {
    const [mainMenueCollapsed, setMainMenuCollapsed] = useState(true);

    const toggleMainMenu = () => {
        setMainMenuCollapsed(!mainMenueCollapsed);
    }

    let mainMenuClasses= 'collapse navbar-collapse';
    if (!mainMenueCollapsed){
        mainMenuClasses+= ' show';
    }

    let menuTogglerButtonClasses = 'navbar-toggler';
    if (!mainMenueCollapsed){
        menuTogglerButtonClasses += ' collapsed';
    }


    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark d-flex flex row-reverse">
                <div className="container-fluid">
                    <button onClick={toggleMainMenu} className={menuTogglerButtonClasses} type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className={mainMenuClasses} id="navbarNavAltMarkup">

                        <div className="navbar-nav mx-auto">
                            <img className="home-picture animation2" src={ieva}/>
                            <span className="nav-item home-circle">
                            <NavLink className="nav-link" exact to="/">Home</NavLink>
                            </span>
                            <span className="nav-item github-circle">
                              <a className="nav-link" href="https://github.com/vaivodeieva">Github</a>
                            </span>
                            <span className="nav-item hobbies-circle">
                            <NavLink className="nav-link" to="/hobbies">Hobbies</NavLink>
                            </span>
                            <span className="nav-item contact-circle">
                            <NavLink className="nav-link" to="/contact" >Contact</NavLink>
                            </span>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )

}

export default Header;

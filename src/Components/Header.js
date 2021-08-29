import '../Assets/Css/Header.css';


function Header() {

    return (
        <div >
            <nav className="navbar navbar-expand-lg navbar-light" style={{background: '#538264'}}>
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse d-flex justify-content-center" id="navbarNav">
                        <ul className="navbar-nav ">
                            <li className="nav-item">
                                <a className="nav-link active " aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="https://github.com/vaivodeieva">Github</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Hobbies</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

        </div>
    )
}

export default Header;
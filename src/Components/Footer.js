import '../Assets/Css/Footer.css'

function Footer() {

    // let date = new Date().getFullYear();

    return (
        <div>
            <div className="container">
                <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
                    <div className="col-md-4 d-flex align-items-center">
                        <a href="/" className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
                            <svg className="bi" style={{width: '30px', height: '24px'}} ><use href="#bootstrap" /></svg>
                        </a>
                        <span className="text-muted">&copy; 2021 Company, Inc</span>
                    </div>

                    <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
                        <li className="ms-3"><a className="text-muted" href="#"><svg className="bi" width="24" height="24"><use href="data:image/png;base64,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" /></svg></a></li>
                        <li className="ms-3"><a className="text-muted" href="#"><svg className="bi" width="24" height="24"><use href="#instagram" /></svg></a></li>
                        <li className="ms-3"><a className="text-muted" href="#"><svg className="bi" width="24" height="24"><use href="#facebook" /></svg></a></li>
                    </ul>
                </footer>
            </div>
        </div>
    )
}

export default Footer;
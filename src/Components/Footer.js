import '../Assets/Css/Footer.css'

function Footer() {

    let date = new Date().getFullYear();

    return (
        <div>
            <div className="footer">
                <p>{date}</p>
            </div>

        </div>
    )
}

export default Footer;
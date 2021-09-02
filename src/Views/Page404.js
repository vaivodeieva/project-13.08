import '../Assets/Css/Page404.css';

function Page404() {

    return (
        <div className="display404">
            <div className="cloud">
            <div className="cloud x1"></div>
            <div className="cloud x1_5"></div>
            <div className="cloud x2"></div>
            <div className="cloud x3"></div>
            <div className="cloud x4"></div>
            <div className="cloud x5"></div>
        </div>
        <div className="container">
            <div className="num404">404</div>
            <hr className="horizontal-rule"/>
            <div className="the-page">THE PAGE</div>
            <div className="_2">WAS NOT FOUND</div>
            <a className="button" href='/'>BACK TO MARS</a>
        </div>

        </div>
    )
}

export default Page404;
import '../Assets/Css/Contact.css';
import logofb from '../Assets/Images/fb-link-logo.jpg';
import logotw from '../Assets/Images/twitter-logo.png';
import logolinkedin from '../Assets/Images/linkedin-logo.png';

function Contact() {
    return (
        <div className="contact-container">
            <div className="row">
                <div className="col-12">
                    <h1 className="text-center hear-from">I'd love to hear from you</h1>
                </div>
            </div>

            <div className="row">

                <div className="col-md-4 links-container mx-auto">
                    
                    
                        <a href="https://www.facebook.com/eva.vronsk" className="soc-links">
                            <img src={logofb} style={{ height: '60px', width: '60px'}} />
                           Like me on Facebook 
                        </a>
                   
                     <a href="https://twitter.com/MeiteneMaakslaa" className="soc-links">
                        <img src={logotw} style={{ height: '60px', width: '60px' }} />
                        Follow me on Twitter
                    </a>
                    
                     <a href="https://www.linkedin.com/in/ieva-vaivode-a28063204/" className="soc-links">
                        <img src={logolinkedin} style={{ height: '60px', width: '60px' }} />

                        Connect with me on LinkedIn
                    </a>
                  

                </div>

                <div className="col-md-8 col-lg-6 mx-auto">

                    <form>
                        <div className="mb-3">
                            <label for="exampleName" className="form-label">Your name</label>
                            <input type="email" className="form-control" id="exampleName" />
                        </div>
                        <div className="mb-3">
                            <label for="exampleInputEmail1" className="form-label">Email address</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            <div id="emailHelp" className="form-text">Your email will never be shared your with anyone else.</div>
                        </div>

                        <div className="form-floating">
                            <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style={{ height: '100px' }}></textarea>
                            <label for="floatingTextarea2">Your message</label>
                        </div>

                        <div className="mb-3 form-check">
                            <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                            <label className="form-check-label" for="exampleCheck1">Check me out</label>
                        </div>
                        <button type="submit" className="btn btn-primary send-btn">Send</button>
                    </form>


                </div>

            </div>
        </div>
    )
}

export default Contact;
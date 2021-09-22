import '../Assets/Css/Contact.css';

function Contact() {
    return (
        <div className="contact-container">
            <div className="row">
                <div className="col-12">
                    <h1 className="text-center">I'd love to hear from you</h1>
                </div>

            </div>
            <div className="row">

                <div className="col-md-4">

                    <h3>Like me on Facebook</h3>
                    <h3>Follow me on Twitter</h3>
                    <h3>Connect with me on LinkedIn</h3>

                </div>

                <div className="col-md-8 col-lg-6">

                    <form>
                        <div className="mb-3">
                            <label for="exampleName" className="form-label">Your name</label>
                            <input type="email" className="form-control" id="exampleName" />
                        </div>
                        <div className="mb-3">
                            <label for="exampleInputEmail1" className="form-label">Email address</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                        </div>

                        <div className="form-floating">
                            <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style={{height: '100px'}}></textarea>
                            <label for="floatingTextarea2">Your message</label>
                        </div>

                        <div className="mb-3 form-check">
                            <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                            <label className="form-check-label" for="exampleCheck1">Check me out</label>
                        </div>
                        <button type="submit" className="btn btn-primary">Send</button>
                    </form>


                    {/* <h2>Send me an email</h2>
                    <label for="name">Name</label>
                    <input id="name"></input>
                    <label for="email">Email</label>
                    <input id="email"></input>
                    <label for="message">Message</label>
                    <textarea id="message"></textarea> */}


                </div>

            </div>
        </div>
    )
}

export default Contact;
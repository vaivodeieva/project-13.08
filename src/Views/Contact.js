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

                <div className="col-4">

                    <h3>Like me on Facebook</h3>
                    <h3>Follow me on Twitter</h3>
                    <h3>Connect with me on LinkedIn</h3>

                </div>

                <div className="col-8">

                    <form>
                        <div class="mb-3">
                            <label for="exampleName" class="form-label">Your name</label>
                            <input type="email" class="form-control" id="exampleName" aria-describedby="emailHelp"/>
                            <div id="emailHelp" class ="form-text">We'll never share your email with anyone else.</div>
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputEmail1" class="form-label">Email address</label>
                            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                            <div id="emailHelp" class ="form-text">We'll never share your email with anyone else.</div>
                        </div>

                        <div class="mb-3">
                            <label for="exampleInputPassword1" class="form-label">Password</label>
                            <input type="password" class="form-control" id="exampleInputPassword1"/>
                        </div>
                        <div class="mb-3 form-check">
                            <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
                            <label class ="form-check-label" for="exampleCheck1">Check me out</label>
                        </div>
                        <button type="submit" class="btn btn-primary">Submit</button>
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
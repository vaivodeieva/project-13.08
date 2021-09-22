import '../Assets/Css/Contact.css';

function Contact() {
    return (
        <div className="contact-container">
            <div className="row">
                <div className="col-6">
                </div>
                <div className="col-6">
                    <h1>I'd love to hear from you</h1>
                    <h3>Like me on Facebook</h3>
                    <h3>Follow me on Twitter</h3>
                    <h3>Connect with me on LinkedIn</h3>

                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <h2>Send me an email</h2>
                    <div className="row">

                        <div className="col-6">
                         <label for="name">Name</label>
                         <input id="name"></input>
                         <label for="email">Email</label>
                         <input id="email"></input>
                      </div>
                      <div className="col-6">
                           <label for="message">Message</label>
                           <textarea id="message"></textarea>
                      </div>

                        </div>
                        <div className="col-6">

                        </div>
                    </div>

                </div>
            </div>
            )
}

            export default Contact;
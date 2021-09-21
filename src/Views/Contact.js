import '../Assets/Css/Contact.css';
import river from '../Assets/Images/river.jpg';

function Contact() {
    return (
        <div className="contact-container">
           <div className="row">
               <div className="col-6">
                  <img src={river} className="img-fluid"/>
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
                   <div className="col-6">
                       <div className="row">
                          <div className="">
                             Your name
                          </div>
                          <div className="col">
                             Your email
                          </div>
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
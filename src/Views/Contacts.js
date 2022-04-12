import React from "react";
import '../Assets/CSS/Contacts.css';
function Contacts() {

    return (
        <div>
            <div className="container-contacts">
            <div className="inner-container-contacts">
                <div className="quote">
                    <h1 className="contacts-h1">Get A Quote</h1>
                    <p className="contacts-p">Fill out the form and our team will get back to you within 24 hours.</p>
                </div>
                <form className="contacts-form" action="">
                    <input className="contacts-input" type="text" placeholder="Name" />
                    <input className="contacts-input" type="text" placeholder="Email" />
                    <textarea className="textarea-contacts" name="Message" id="" cols="30" rows="10" placeholder="Message"></textarea>
                    <button className="contacts-button" type="submit">Send Message</button>
                </form>
              </div>
            </div>

        </div>
    )
}

export default Contacts;
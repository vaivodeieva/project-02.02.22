import React from "react";
import '../Assets/CSS/Contacts.css';
function Contacts() {

    return (
        <div>
            <div className="container">
                <div className="quote">
                    <h1>Get A Quote</h1>
                    <p>Fill out the form and our team will get back to you within 24 hours.</p>
                </div>
                <form action="">
                    <input type="text" placeholder="Name" />
                    <input type="text" placeholder="Email" />
                    <textarea name="Message" id="" cols="30" rows="10" placeholder="Message"></textarea>
                    <button type="submit">Send Message</button>
                </form>

            </div>

        </div>
    )
}

export default Contacts;
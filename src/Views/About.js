import React from "react";
import '../Assets/CSS/About.css';
import john from '../Assets/IMAGES/john.jpg';
import anja from '../Assets/IMAGES/anja.jpg';
import mike from '../Assets/IMAGES/mike.jpg';
import dan from '../Assets/IMAGES/dan.jpg';
function About() {

  return (
    <div>
      <div className="team-container w3-blue">
      <div className="top-container">
        <div className="bgimg1 w3-display-container w3-grayscale-min" id="home">
          <div className="w3-display-left w3-text-white" style={{ padding: '48px' }}>
          </div>
          <div className="w3-display-bottomleft w3-text-grey w3-large" style={{ padding: '24px 48px' }}>
            <i className="fa fa-facebook-official w3-hover-opacity"></i>
            <i className="fa fa-instagram w3-hover-opacity"></i>
            <i className="fa fa-snapchat w3-hover-opacity"></i>
            <i className="fa fa-pinterest-p w3-hover-opacity"></i>
            <i className="fa fa-twitter w3-hover-opacity"></i>
            <i className="fa fa-linkedin w3-hover-opacity"></i>
          </div>
        </div>
      </div>

      <div className="w3-container" style={{ padding: '128px 16px' }} id="team">
        <h3 className="w3-center">OUR TEAM</h3>
        <div className="w3-row-padding w3-blue" style={{ marginTop: '64px' }}>
          <div className="w3-col l3 m6 w3-margin-bottom">
            <div className="w3-card">
              <img src={john} alt="John" style={{ width: '100%' }} />
              <div className="w3-container">
                <h3>John Doe</h3>
                <p className="w3-opacity">CEO and Founder</p>
                <p>Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.</p>
                <p><button className="w3-button w3-light-grey w3-block"><i className="fa fa-envelope"></i> Contact</button></p>
              </div>
            </div>
          </div>
          <div className="w3-col l3 m6 w3-margin-bottom">
            <div className="w3-card">
              <img src={anja} alt="Jane" style={{ width: '100%' }} />
              <div className="w3-container">
                <h3>Anja Doe</h3>
                <p className="w3-opacity">Art Director</p>
                <p>Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.</p>
                <p><button className="w3-button w3-light-grey w3-block"><i className="fa fa-envelope"></i> Contact</button></p>
              </div>
            </div>
          </div>
          <div className="w3-col l3 m6 w3-margin-bottom">
            <div className="w3-card">
              <img src={mike} alt="Mike" style={{ width: '100%' }} />
              <div className="w3-container">
                <h3>Mike Ross</h3>
                <p className="w3-opacity">Web Designer</p>
                <p>Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.</p>
                <p><button className="w3-button w3-light-grey w3-block"><i className="fa fa-envelope"></i> Contact</button></p>
              </div>
            </div>
          </div>
          <div className="w3-col l3 m6 w3-margin-bottom">
            <div className="w3-card">
              <img src={dan} alt="Dan" style={{ width: '100%' }} />
              <div className="w3-container">
                <h3>Dan Star</h3>
                <p className="w3-opacity">Designer</p>
                <p>Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.</p>
                <p><button className="w3-button w3-light-grey w3-block"><i className="fa fa-envelope"></i> Contact</button></p>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>

      <div className="w3-container w3-center w3-blue" id="pricing">
        <h3>PRICING</h3>
        <div className="w3-row-padding" style={{ marginTop: '64px' }}>
          <div className="w3-third w3-section">
            <ul className="w3-ul w3-white w3-hover-shadow">
              <li className="w3-brown w3-xlarge w3-padding-32">Basic</li>
              <li className="w3-padding-16"><b>10GB</b> Storage</li>
              <li className="w3-padding-16"><b>10</b> Emails</li>
              <li className="w3-padding-16"><b>10</b> Domains</li>
              <li className="w3-padding-16"><b>Endless</b> Support</li>
              <li className="w3-padding-16">
                <h2 className="w3-wide">$ 10</h2>
                <span className="w3-opacity">per month</span>
              </li>
              <li className="w3-light-grey w3-padding-24">
                <button className="w3-button w3-brown w3-padding-large">Sign Up</button>
              </li>
            </ul>
          </div>
          <div className="w3-third">
            <ul className="w3-ul w3-white w3-hover-shadow">
              <li className="w3-green w3-xlarge w3-padding-48">Pro</li>
              <li className="w3-padding-16"><b>25GB</b> Storage</li>
              <li className="w3-padding-16"><b>25</b> Emails</li>
              <li className="w3-padding-16"><b>25</b> Domains</li>
              <li className="w3-padding-16"><b>Endless</b> Support</li>
              <li className="w3-padding-16">
                <h2 className="w3-wide">$ 25</h2>
                <span className="w3-opacity">per month</span>
              </li>
              <li className="w3-light-grey w3-padding-24">
                <button className="w3-button w3-green w3-padding-large">Sign Up</button>
              </li>
            </ul>
          </div>
          <div className="w3-third w3-section">
            <ul className="w3-ul w3-white w3-hover-shadow">
              <li className="w3-black w3-xlarge w3-padding-32">Premium</li>
              <li className="w3-padding-16"><b>50GB</b> Storage</li>
              <li className="w3-padding-16"><b>50</b> Emails</li>
              <li className="w3-padding-16"><b>50</b> Domains</li>
              <li className="w3-padding-16"><b>Endless</b> Support</li>
              <li className="w3-padding-16">
                <h2 className="w3-wide">$ 50</h2>
                <span className="w3-opacity">per month</span>
              </li>
              <li className="w3-light-grey w3-padding-24">
                <button className="w3-button w3-black w3-padding-large">Sign Up</button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About;
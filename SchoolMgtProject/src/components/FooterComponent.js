import React from "react";
import { Link } from "react-router-dom";

function Footer(props) {
  return (
    <div className="footer">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-4 offset-1 col-sm-3">
            <h5>Links</h5>
            <ul className="list-unstyled">
              <li>
                <Link to="/home">Home</Link>
              </li>
              <li>
                <Link to="/menu">Menu</Link>
              </li>
              <li>
                <Link to="/aboutus">About Us</Link>
              </li>

              <li>
                <Link to="/contactus">Contact Us</Link>
              </li>
            </ul>
          </div>
          <div className="col-7 col-sm-4 text-center">
            <h5>Our Address</h5>
            <address>
              121, Middeniya Road
              <br />
              Matara
              <br />
              Sri Lanka
              <br />
              <i className="fa fa-phone fa-lg"></i>: 021 225 6598
              <br />
              <i className="fa fa-fax fa-lg"></i>: 021 255 4565
              <br />
              <i className="fa fa-envelope fa-lg"></i>:{" "}
              <a href="mailto:info@mmv.lk">info@mmv.lk</a>
            </address>
          </div>
          <div className="col-12 col-sm-4 align-self-center">
            <div className="text-center">
              <a
                className="btn btn-social-icon btn-google bt"
                href="http://google.com/+"
              >
                <i className="fa fa-google-plus"></i>
              </a>
              <a
                className="btn btn-social-icon btn-facebook bt"
                href="http://www.facebook.com/profile.php?id="
              >
                <i className="fa fa-facebook"></i>
              </a>
              <a
                className="btn btn-social-icon btn-linkedin bt"
                href="http://www.linkedin.com/in/"
              >
                <i className="fa fa-linkedin"></i>
              </a>
              <a
                className="btn btn-social-icon btn-twitter bt"
                href="http://twitter.com/"
              >
                <i className="fa fa-twitter"></i>
              </a>
              <a
                className="btn btn-social-icon btn-google bt"
                href="http://youtube.com/"
              >
                <i className="fa fa-youtube"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-auto">
            <br></br>
            <p>
              Copyright 2021 © Middeniya Maha Vidyalaya. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;

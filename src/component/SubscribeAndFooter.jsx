import React from "react";

const SubscribeAndFooter = () => {
  return (
    <div className="subscribe-footer-section">
      <div style={{ display: "flex", padding: "50px 20px" }}>
        <div className="subscribe-section">
          <h2>Subscribe</h2>
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna
          </p>
          <div className="subscribe-input">
            <input type="email" placeholder="Enter your Email Address" />
            <button className="subscribe-btn">Subscribe Now</button>
          </div>
        </div>
        <img src="images\Screenshot 2024-10sadsad-07 233322.png" />
      </div>

      <div className="footer-section">
        <div className="footer-content">
          <div className="contact-info">
            <h3>Contact us</h3>
            <p>Address: amet, consetetur sadipscing elitr, sed diam</p>
            <p>Email id: eirmod tempor invidunt ut labore et dolore</p>
            <p>Phone no: 123456789</p>
          </div>

          <div className="follow-us">
            <h3>Follow us</h3>
            <div className="social-icons">
              <a href="#">
                <i className="fa fa-facebook"></i>
              </a>
              <a href="#">
                <i className="fa fa-linkedin"></i>
              </a>
              <a href="#">
                <i className="fa fa-instagram"></i>
              </a>
              <a href="#">
                <i className="fa fa-twitter"></i>
              </a>
              <a href="#">
                <i className="fa fa-youtube"></i>
              </a>
              <a href="#">
                <i className="fa fa-search"></i>
              </a>
            </div>
          </div>

          <div className="head-office">
            <h3>Head Office</h3>
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            </p>
            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr</p>
            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr</p>
            <p>Lorem ipsum asd asdsaweeq Lorem Ipsum</p>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2021 All Rights Reserved. Privacy Policy</p>
        </div>
      </div>
    </div>
  );
};

export default SubscribeAndFooter;

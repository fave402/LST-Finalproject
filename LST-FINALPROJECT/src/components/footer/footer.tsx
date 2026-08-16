import React from "react";
import "../footer/footer.css";

import facebookIcon from "../assets/Images/facebookicon.png";
import instagramIcon from "../assets/Images/insta.png";
import twitterIcon from "../assets/Images/twitter.png";

const Footer: React.FC = () => {
  return (
    <footer className="site-footer">
      {/* Brand and social links */}
      <div className="footer-brand-row">
        <div className="footer-brand-container">
          <h2 className="footer-brand">Bandage</h2>

          <div className="footer-social-links">
            <a href="#facebook" aria-label="Facebook">
              <img src={facebookIcon} alt="Facebook" />
            </a>

            <a href="#instagram" aria-label="Instagram">
              <img src={instagramIcon} alt="Instagram" />
            </a>

            <a href="#twitter" aria-label="Twitter">
              <img src={twitterIcon} alt="Twitter" />
            </a>
          </div>
        </div>
      </div>

      {/* Footer links and newsletter */}
      <div className="footer-content">
        <div className="footer-content-container">
          <div className="footer-column">
            <h4>Company Info</h4>
            <ul>
              <li>
                <a href="#about">About Us</a>
              </li>
              <li>
                <a href="#carrier">Carrier</a>
              </li>
              <li>
                <a href="#hiring">We are hiring</a>
              </li>
              <li>
                <a href="#blog">Blog</a>
              </li>
            </ul>
          </div>

          <div className="footer-column">
            <h4>Legal</h4>
            <ul>
              <li>
                <a href="#about">About Us</a>
              </li>
              <li>
                <a href="#carrier">Carrier</a>
              </li>
              <li>
                <a href="#hiring">We are hiring</a>
              </li>
              <li>
                <a href="#blog">Blog</a>
              </li>
            </ul>
          </div>

          <div className="footer-column">
            <h4>Features</h4>
            <ul>
              <li>
                <a href="#business">Business Marketing</a>
              </li>
              <li>
                <a href="#analytics">User Analytics</a>
              </li>
              <li>
                <a href="#live">Live Chat</a>
              </li>
              <li>
                <a href="#support">Unlimited Support</a>
              </li>
            </ul>
          </div>

          <div className="footer-column">
            <h4>Resources</h4>
            <ul>
              <li>
                <a href="#ios">IOS & Android</a>
              </li>
              <li>
                <a href="#watch">Watch a Demo</a>
              </li>
              <li>
                <a href="#customers">Customers</a>
              </li>
              <li>
                <a href="#api">API</a>
              </li>
            </ul>
          </div>

          <div className="footer-column newsletter">
            <h4>Get In Touch</h4>

            <form
              className="subscribe-form"
              onSubmit={(event) => event.preventDefault()}
            >
              <div className="subscribe-input">
                <input
                  type="email"
                  placeholder="Your Email"
                  required
                />

                <button type="submit">
                  Subscribe
                </button>
              </div>
            </form>

            <p className="newsletter-note">
              We will never share your email.
            </p>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="footer-copyright">
        <div className="copyright-container">
          <p>Made With Love By Finland All Right Reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
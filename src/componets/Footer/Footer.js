import React from "react";
import { FaFacebookF, FaPinterestP, FaFlipboard } from "react-icons/fa";
import { AiOutlineTwitter, AiFillInstagram } from "react-icons/ai";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="footer-first-section">
        <div className="first-box">
          <h1>
            <a href="#">
              <span className="logo">LADY|ZUMB△</span>
            </a>

            <div className="social-media">
              <a href="#">
                <FaFacebookF className="social-media-icon" />
              </a>
              <a href="#">
                <AiOutlineTwitter className="social-media-icon" />
              </a>

              <a href="#">
                <FaPinterestP className="social-media-icon" />
              </a>

              <a href="#">
                <AiFillInstagram className="social-media-icon" />
              </a>

              <a href="#">
                <FaFlipboard className="social-media-icon" />
              </a>
            </div>
          </h1>
          <div className="footer-main-container">
            <div className="footer-item first">
              <h3>Get our newsletter</h3>
              <p>
                Filter out the noise and nurture your inbox with health and
                wellness advice that's inclusive and rooted in medical
                expertise.
              </p>
              <div className="newsletter-subscribe">
                <input type="email" placeholder="Enter your email" />
                <button>
                  <span>SIGN UP</span>
                </button>
              </div>
              <div className="privacy">
                Your <a href="#">privacy</a> is important to us
              </div>
            </div>
            <div className="footer-item second">
              <ul>
                <li>
                  <a href="#">About Us</a>
                </li>
                <li>
                  <a href="#">Contact Us</a>
                </li>
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
                <li>
                  <a href="#">Privacy Settings</a>
                </li>
                <li>
                  <a href="#">Advertising Policy</a>
                </li>
                <li>
                  <a href="#">Health Topics</a>
                </li>
                <li>
                  <a href="#">Medical Affairs</a>
                </li>
                <li>
                  <a href="#">Content Integrity</a>
                </li>
                <li>
                  <a href="#">Newsletters</a>
                </li>
              </ul>
            </div>
            <div className="footer-item third">
              <p>
                © 2022-2022 Ladyzumba Media Company. All rights reserved. Our
                website services, content, and products are for informational
                purposes only. Healthline Media does not provide medical advice,
                diagnosis, or treatment.
                <br />
                <span>
                  <a href="#">See additional information</a>
                </span>
                .
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-second-section">
        <div className="logo-box">
          <h2>
            <a href="">LADY|ZUMB△</a>
          </h2>
        </div>
        <div className="contact-box">
          <ul>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Careers</a>
            </li>
            <li>
              <a href="#">Advertise with us</a>
            </li>
          </ul>
          <div className="certification-badge">
            <img
              src="https://d1.awsstatic.com/aws-config/Logos/ISO9001.fdf177e87d8cbe753f9d3e08f03a5641878ec820.jpg"
              alt="ISO certification badge"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

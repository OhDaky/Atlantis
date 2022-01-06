import React from "react";
import "./Style/Footer.css";

const Footer = () => {
  return (
    <footer className="footer-content">
      <div className="footer-wrap">
        <a className="logo">Atlantis</a>
        <div className="footer-row">
          <div className="footer-tab footer-tab-left">
            <div className="footer-block-inner">
              <h3>CONTACT US</h3>
              <p>
                <a href="mailto:ttakko88@gmail.com" target="_blank" rel="noopener noreferrer">TTAKKO88@GMAIL.COM</a>
              </p>
            </div>
          </div>
          <div className="footer-tab footer-tab-center">
            <h3>FOLLOW US</h3>
            <div className="footer-share">
              <a className="social-twitter" href="" target="_blank" rel="noopener noreferrer">Twitter</a>
            </div>
          </div>
          <div className="footer-tab footer-tab-right">
            <div className="footer-block-inner about-us">
              <h3>ABOUT US</h3>
              <p>
                <a className="WIKI" href="">WIKI</a> 
              </p>
              <p>
                <a className="GITHUB" href="">GITHUB</a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright">© 2022 CITEA_O. ALL RIGHTS RESERVED.</div>
    </footer>
  )
}

export default Footer;
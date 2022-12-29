import React from "react";
import {
  GrFacebook,
  GrInstagram,
  GrLinkedin,
  GrYoutube,
  GrMail,
} from "react-icons/gr";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer-container">
      <ul className="footer-link">
        <li className="fb">
          <a
            href="https://www.facebook.com/beingstrongglobal"
            target="_blank"
            className="fb-icon"
          >
            <GrFacebook />
          </a>
        </li>
        <li className="ig">
          <a
            href="https://www.instagram.com/beingstrongglobal/"
            target="_blank"
            className="ig-icon"
          >
            <GrInstagram />
          </a>
        </li>
        <li className="lin">
          <a
            href="https://www.linkedin.com/company/being-strong-fitness-equipment/"
            target="_blank"
            className="lin-icon"
          >
            <GrLinkedin />
          </a>
        </li>
        <li className="yt">
          <a
            href="https://www.youtube.com/@beingstrongofficial"
            target="_blank"
            className="yt-icon"
          >
            <GrYoutube />
          </a>
        </li>
        <li className="mail">
          <a
            href="https://mail.google.com/mail/u/0/#inbox?compose=CllgCJZXhcvFPswvxGMXdjlqVnDfGZKxGZJjXVPNLlSJvSnDCSrjtBxtQFLJPZrXkqLFLWPZRkg"
            target="_blank"
            className="mail-icon"
          >
            <GrMail />
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Footer;

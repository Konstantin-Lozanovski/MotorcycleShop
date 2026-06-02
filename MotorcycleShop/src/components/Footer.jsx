import "../styles/Footer.css";
import { FaInstagram, FaFacebook, FaXTwitter, FaYoutube, FaDiscord } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="footer-container">

        {/* LEFT: BRAND */}
        <div className="footer-brand">
          <h2>Apex Moto</h2>
          <p>
            High-performance motorcycles built for speed, control, and freedom.
          </p>
        </div>

        {/* CENTER: WHAT WE OFFER */}
        <div className="footer-links">
          <h3>What We Offer</h3>

          <ul>
            <li>Sport Motorcycles</li>
            <li>Cruiser Bikes</li>
            <li>Electric Models</li>
            <li>Performance Engineering</li>
          </ul>
        </div>

        {/* RIGHT: SOCIAL */}
        <div className="footer-social">
          <h3>Follow Us</h3>

          <div className="social-icons">
            <a href="https://instagram.com">Instagram <FaInstagram /></a>
            <a href="https://facebook.com">Facebook <FaFacebook /></a>
            <a href="https://x.com"><FaXTwitter /></a>
            <a href="https://youtube.com">Youtube <FaYoutube /></a>
            <a href="https://discord.com">Discord <FaDiscord /></a>
          </div>
        </div>

      </div>

      {/* BOTTOM LINE */}
      <div className="footer-bottom">
        © 2026 Apex Moto. All rights reserved.
      </div>
    </footer>
  );
}
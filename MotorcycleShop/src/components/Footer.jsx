import "../styles/Footer.css";

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
            <span>Instagram</span>
            <span>Facebook</span>
            <span>X</span>
            <span>YouTube</span>
            <span>Discord</span>
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
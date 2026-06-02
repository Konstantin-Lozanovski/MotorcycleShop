import "../styles/Contact.css";

export default function Contact() {
  return (
    <div className="contact-page">

      <h1>Contact Us</h1>
      <p className="text-muted">
        We’d love to hear your feedback, questions, or business inquiries.
      </p>

      {/* FORM */}
      <form className="contact-form">

        <div className="row">
          <input type="text" placeholder="First Name" />
          <input type="text" placeholder="Last Name" />
        </div>

        <input type="email" placeholder="Email Address" />

        <textarea placeholder="Your Message..." rows="5"></textarea>

        {/* RATING */}
        <div className="rating-section">
          <p>How would you rate your experience?</p>

          <label>
            <input type="radio" name="rating" value="1" /> 1
          </label>

          <label>
            <input type="radio" name="rating" value="2" /> 2
          </label>

          <label>
            <input type="radio" name="rating" value="3" /> 3
          </label>

          <label>
            <input type="radio" name="rating" value="4" /> 4
          </label>

          <label>
            <input type="radio" name="rating" value="5" /> 5
          </label>
        </div>

        <button type="submit">Send Message</button>
      </form>

      {/* LOCATION */}
      <div className="contact-footer">

        <div className="address">
          <h3>Apex Moto Headquarters</h3>
          <p>Industrial Zone 12, Arizona, USA</p>
        </div>

        <div className="map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1683976.000550334!2d-116.07305828712245!3d34.47712785074854!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80d1f2dec1f1a189%3A0xefc05b3145b8cffa!2sBest%20Moto%20Sports!5e0!3m2!1ssr!2smk!4v1780425444754!5m2!1ssr!2smk"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

      </div>

    </div>
  );
}
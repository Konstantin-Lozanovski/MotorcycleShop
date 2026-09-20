import { useState } from "react";
import "../styles/Contact.css";

const ratingOptions = [1, 2, 3, 4, 5];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <div className="contact-page">
      <section className="contact-intro">
        <p className="eyebrow">Start a conversation</p>
        <h1>Let&apos;s talk <span>motorcycles.</span></h1>
        <p>
          Have a question about a bike, need help choosing your next ride, or
          simply want to share your thoughts? The Apex Moto team is here to help.
        </p>
      </section>

      <section className="contact-content">
        <aside className="contact-sidebar">
          <div>
            <p className="eyebrow">Reach the team</p>
            <h2>We&apos;re here for every mile.</h2>
            <p className="sidebar-copy">
              Send us a message and our team will get back to you as soon as
              possible during business hours.
            </p>
          </div>

          <div className="contact-details">
            <div>
              <span className="detail-label">Email</span>
              <a href="mailto:hello@apexmoto.com">hello@apexmoto.com</a>
            </div>
            <div>
              <span className="detail-label">Phone</span>
              <a href="tel:+18005550199">+1 (800) 555-0199</a>
            </div>
            <div>
              <span className="detail-label">Hours</span>
              <p>Mon–Fri, 9:00 AM–6:00 PM</p>
            </div>
          </div>
        </aside>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-heading">
            <h2>Send us a message</h2>
            <p>Tell us how we can help.</p>
          </div>

          <div className="form-row">
            <label>
              First name
              <input type="text" name="firstName" placeholder="Alex" required />
            </label>
            <label>
              Last name
              <input type="text" name="lastName" placeholder="Rider" required />
            </label>
          </div>

          <label>
            Email address
            <input type="email" name="email" placeholder="alex@example.com" required />
          </label>

          <label>
            Subject
            <select name="subject" defaultValue="general">
              <option value="general">General question</option>
              <option value="bike">Question about a motorcycle</option>
              <option value="order">Order support</option>
              <option value="partnership">Partnership inquiry</option>
            </select>
          </label>

          <label>
            Your message
            <textarea name="message" placeholder="How can we help?" rows="5" required />
          </label>

          <fieldset className="rating-section">
            <legend>Tell us what you think</legend>
            <div className="rating-question">
              <p>How would you rate our product selection?</p>
              <div className="rating-options">
                {ratingOptions.map((rating) => (
                  <label key={`selection-${rating}`}>
                    <input type="radio" name="productSelection" value={rating} required />
                    <span>{rating}</span>
                  </label>
                ))}
              </div>
              <div className="rating-labels"><span>Needs work</span><span>Excellent</span></div>
            </div>

            <div className="rating-question">
              <p>How satisfied are you with your experience on our website?</p>
              <div className="rating-options">
                {ratingOptions.map((rating) => (
                  <label key={`experience-${rating}`}>
                    <input type="radio" name="websiteExperience" value={rating} required />
                    <span>{rating}</span>
                  </label>
                ))}
              </div>
              <div className="rating-labels"><span>Not satisfied</span><span>Very satisfied</span></div>
            </div>
          </fieldset>

          <label>
            Additional comments <span className="optional">(optional)</span>
            <textarea name="comments" placeholder="Anything else you would like to share?" rows="3" />
          </label>

          <button className="contact-submit" type="submit">Submit feedback <span>→</span></button>
          {submitted && (
            <p className="form-success" role="status">
              Thanks for reaching out. Your message and feedback have been received.
            </p>
          )}
        </form>
      </section>

      <section className="location-section">
        <div className="location-copy">
          <p className="eyebrow">Visit us</p>
          <h2>Find Apex Moto.</h2>
          <p>Stop by our headquarters to talk bikes, compare models, and plan your next adventure.</p>
          <address>
            <strong>Apex Moto Headquarters</strong>
            Industrial Zone 12<br />
            Arizona, USA
          </address>
          <a className="directions-link" href="https://www.google.com/maps/search/?api=1&query=Best+Moto+Sports+Arizona" target="_blank" rel="noreferrer">
            Get directions →
          </a>
        </div>
        <div className="map">
          <iframe
            title="Apex Moto headquarters location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1683976.000550334!2d-116.07305828712245!3d34.47712785074854!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80d1f2dec1f1a189%3A0xefc05b3145b8cffa!2sBest%20Moto%20Sports!5e0!3m2!1ssr!2smk!4v1780425444754!5m2!1ssr!2smk"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>
    </div>
  );
}

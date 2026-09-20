import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import "../styles/About.css";

export default function About() {
  return (
    <div className="about-page">
      <section className="about-hero">
        <div className="about-hero-content">
          <p className="eyebrow">The Apex Moto story</p>
          <h1>Built for the <span>ride ahead.</span></h1>
          <p className="about-lead">
            We are building a better way to find your next motorcycle: a focused
            online shop where serious engineering, honest guidance, and the freedom
            of two wheels meet.
          </p>
        </div>
        <div className="about-hero-image">
          <img src="/images/bike1.png" alt="Apex Moto performance motorcycle" />
        </div>
      </section>

      <section className="about-story">
        <div className="about-section-heading">
          <p className="eyebrow">Our mission</p>
          <h2>More than a machine.</h2>
        </div>
        <div className="about-story-copy">
          <p>
            Apex Moto began with a simple belief: buying a motorcycle should feel
            as exciting as riding one. We bring together a carefully selected
            range of sport bikes, cruisers, commuters, and electric models for
            riders who expect more from every mile.
          </p>
          <p>
            From the first search to the first turn of the throttle, our goal is
            to make every step clear and confident. We highlight the details that
            matter, celebrate the technology behind each bike, and put the rider
            at the center of every decision.
          </p>
        </div>
      </section>

      <section className="about-values">
        <div className="about-section-heading">
          <p className="eyebrow">What drives us</p>
          <h2>Our values on every road.</h2>
        </div>
        <div className="value-grid">
          <article className="value-card">
            <span className="value-number">01</span>
            <h3>Performance with purpose</h3>
            <p>We look for responsive handling, thoughtful design, and technology that makes riding better.</p>
          </article>
          <article className="value-card">
            <span className="value-number">02</span>
            <h3>Rider-first guidance</h3>
            <p>Clear information and a human perspective help every rider choose a motorcycle that fits.</p>
          </article>
          <article className="value-card">
            <span className="value-number">03</span>
            <h3>Freedom to explore</h3>
            <p>Whether it is a daily commute or an open highway, we believe every bike should unlock possibility.</p>
          </article>
        </div>
      </section>

      <section className="about-cta">
        <p className="eyebrow">Your next chapter starts here</p>
        <h2>Find the bike that moves you.</h2>
        <Link className="about-cta-button" to="/#products">Explore motorcycles</Link>
      </section>

      <Footer />
    </div>
  );
}

import Hero from "../components/Hero";
import FeaturedBikes from "../components/FeaturedBikes";
import BrandInfo from "../components/BrandInfo";
import Features from "../components/Features";
import Footer from "../components/Footer";
import "../styles/Home.css";

function Home() {
  return (
    <main className="home">
      {/* HERO SECTION */}
      <Hero />

      {/* CINEMATIC BIKE SHOT */}
      <section className="bike-showcase-image">
        <img src="/images/bike-rear.png" alt="Motorcycle detail shot" />
        <div className="image-overlay">
          <h2>Engineered for Precision</h2>
        </div>
      </section>

      <section className="brand-video section">
        <div className="section-header">
          <h2>Built for the ride</h2>
          <p className="text-muted">
            Get inspired by the machines, roads, and riding culture behind Apex Moto.
          </p>
        </div>
        <div className="video-frame">
          <iframe
            title="Motorcycle brand film"
            src="https://www.youtube.com/embed/PSHTkGHfSVo"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </section>

      {/* FEATURED MOTORCYCLES */}
      <section id="products" className="section">
        <div className="section-header">
          <h2>Featured Motorcycles</h2>
          <p className="text-muted">
            Explore our latest high-performance machines built for speed and control.
          </p>
        </div>

        <FeaturedBikes />
      </section>

      {/* ABOUT / DETAILS */}
      <BrandInfo />

      {/* FEATURES */}
      <Features />
      <Footer />
    </main>
  );
}

export default Home;
import "../styles/Hero.css";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Ride Beyond Limits</h1>

        <p>
          Apex Moto is a next-generation motorcycle brand built for riders who demand
          extreme performance, precision engineering, and absolute freedom on every road.
          From city streets to open highways, every machine is designed to push the edge
          of speed and control.
        </p>

        <div className="hero-buttons">
          <button>Explore the Lineup</button>
          <button className="secondary">Discover the Brand</button>
        </div>
      </div>

      <div className="hero-image">
        <img src="../../public/images/Hero-Bike.png" alt="Motorcycle" />
      </div>
    </section>
  );
}
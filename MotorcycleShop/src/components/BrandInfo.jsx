import "../styles/BrandInfo.css";

export default function BrandInfo() {
  return (
    <section className="brand-info">
      <h2>Who We Are</h2>


      <p>
        Apex Moto is a performance-focused motorcycle manufacturer dedicated to
        blending engineering precision with rider emotion. We design machines that
        don’t just transport you — they transform the way you experience the road.
      </p>

      <p>
        Founded with a passion for speed and innovation, our philosophy is simple:
        every motorcycle should feel alive. Whether it’s a lightweight city bike or
        a high-performance superbike, every Apex Moto model is built with the same
        attention to detail, safety, and raw power.
      </p>

      <p>
        We are constantly pushing boundaries in aerodynamics, engine efficiency,
        and rider comfort, ensuring every ride is smoother, faster, and more
        connected to the road.
      </p>

      <div className="stats">
        <div>
          <h3>25+</h3>
          <p>Years of Engineering Innovation</p>
        </div>

        <div>
          <h3>50K+</h3>
          <p>Motorcycles Delivered Worldwide</p>
        </div>

        <div>
          <h3>98%</h3>
          <p>Rider Satisfaction & Trust</p>
        </div>
      </div>
    </section>
  );
}
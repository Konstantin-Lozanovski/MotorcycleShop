import {useNavigate, useParams} from "react-router-dom";
import bikes from "../data/bikes";
import "../styles/BikeDetails.css";
import {useEffect} from "react";
import { useCart } from "../context/cartContext";

function BikeDetailsPage() {
  const { id } = useParams();

  const navigate = useNavigate();
  const { addToCart } = useCart();

  useEffect(() => {
    window.scrollTo({top: 0, behavior: "instant"})
  }, [id])

  const bike = bikes.find((b) => b.id === Number(id));

  if (!bike) {
    return <h2>Bike not found</h2>;
  }

  const relatedBikes = bikes.filter(
    (b) => b.category === bike.category && b.id !== bike.id
  );

  return (
    <div className="bike-page">
      <button className="back-btn" onClick={() => navigate("/")}>
        ← Back to Home
      </button>


      <div className="bike-page-container">


        <img src={bike.image} alt={bike.name} />

        <div className="bike-page-info">
          <h1>{bike.name}</h1>

          <p className="price">${bike.price}</p>

          <ul>
            <li>Category: {bike.category}</li>
            <li>Engine: {bike.engine}</li>
            <li>Top Speed: {bike.speed}</li>
          </ul>

          <p>{bike.description}</p>

          <button onClick={() => addToCart(bike)}>Add to Cart</button>
        </div>

      </div>

      <div className="related-section">
        <h2>Related Bikes</h2>

        <div className="related-grid">
          {relatedBikes.map((b) => (
            <div
              key={b.id}
              className="related-card"
              onClick={() => navigate(`/bike/${b.id}`)}
            >
              <img src={b.image} alt={b.name} />

              <h3>{b.name}</h3>
              <p className="muted">{b.category}</p>
              <p className="price">${b.price}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default BikeDetailsPage;
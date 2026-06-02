import "../styles/BikeDetails.css";

export default function BikeDetails({ bike, onClose }) {
  return (
    <section className="bike-details">
      <div className="details-container">
        <img src={bike.image} alt={bike.name} />

        <div className="details-info">
          <h2>{bike.name}</h2>

          <ul>
            <li>Engine: {bike.engine}</li>
            <li>Top Speed: {bike.speed}</li>
            <li>Category: {bike.category}</li>
          </ul>

          <p>{bike.description}</p>

          <button onClick={onClose}>Close</button>
        </div>
      </div>
    </section>
  );
}
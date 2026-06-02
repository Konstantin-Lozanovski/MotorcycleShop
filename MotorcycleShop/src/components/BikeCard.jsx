import "../styles/BikeCard.css";
import {useNavigate} from "react-router-dom";

export default function BikeCard({ bike }) {
  const navigate = useNavigate()

  return (
    <div className="bike-card" onClick={() => navigate(`/bike/${bike.id}`)}>
      <img src={bike.image} alt={bike.name} />

      <div className="bike-info">
        <h3>{bike.name}</h3>
        <p className="muted">{bike.category}</p>
        <p className="price">${bike.price}</p>

        <button>View Details</button>
      </div>
    </div>
  );
}
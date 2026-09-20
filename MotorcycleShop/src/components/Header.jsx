import "../styles/Header.css";
import { Link } from "react-router-dom";
import { useCart } from "../context/cartContext";


export default function Header() {
  const { itemCount } = useCart();

  return (
    <header className="header">
      <div className="logo">
        <div className="logo-icon"></div>
        Apex <span>Moto</span>
      </div>

      <nav>
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </nav>

      <Link className="header-btn cart-link" to="/cart">
        Cart{itemCount > 0 && <span className="cart-count">{itemCount}</span>}
      </Link>
    </header>
  );
}
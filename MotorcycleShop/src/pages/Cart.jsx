import { Link } from "react-router-dom";
import { useCart } from "../context/cartContext";
import "../styles/Cart.css";

export default function Cart() {
  const { cartItems, subtotal, updateQuantity, removeFromCart } = useCart();

  if (cartItems.length === 0) {
    return (
      <main className="cart-page cart-empty">
        <p className="eyebrow">Your selection</p>
        <h1>Your cart is empty.</h1>
        <p>Find a motorcycle that matches your next adventure.</p>
        <Link className="cart-action" to="/products">Explore motorcycles</Link>
      </main>
    );
  }

  return (
    <main className="cart-page">
      <div className="cart-heading">
        <div>
          <p className="eyebrow">Your selection</p>
          <h1>Your cart</h1>
        </div>
        <Link className="continue-shopping" to="/products">Continue shopping →</Link>
      </div>

      <div className="cart-layout">
        <section className="cart-items" aria-label="Cart items">
          {cartItems.map((item) => (
            <article className="cart-item" key={item.id}>
              <img src={item.image} alt={item.name} />
              <div className="cart-item-info">
                <p className="cart-category">{item.category}</p>
                <h2>{item.name}</h2>
                <p className="cart-price">${item.price.toLocaleString()}</p>
                <button className="remove-item" onClick={() => removeFromCart(item.id)}>
                  Remove
                </button>
              </div>
              <div className="quantity-control">
                <span>Quantity</span>
                <div>
                  <button
                    aria-label={`Decrease quantity of ${item.name}`}
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                  >
                    −
                  </button>
                  <strong>{item.quantity}</strong>
                  <button
                    aria-label={`Increase quantity of ${item.name}`}
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  >
                    +
                  </button>
                </div>
              </div>
              <strong className="item-total">${(item.price * item.quantity).toLocaleString()}</strong>
            </article>
          ))}
        </section>

        <aside className="cart-summary">
          <h2>Order summary</h2>
          <div><span>Subtotal</span><strong>${subtotal.toLocaleString()}</strong></div>
          <div><span>Shipping</span><span>Calculated at checkout</span></div>
          <div className="summary-total"><span>Estimated total</span><strong>${subtotal.toLocaleString()}</strong></div>
          <button className="checkout-button" type="button">Proceed to checkout</button>
          <p>Taxes and shipping will be confirmed before your order is placed.</p>
        </aside>
      </div>
    </main>
  );
}

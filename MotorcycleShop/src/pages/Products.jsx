import { Link } from "react-router-dom";
import { productCategories } from "../data/productCategories";
import "../styles/Products.css";

export default function Products() {
  return (
    <div className="products-page">
      <section className="products-heading">
        <p className="eyebrow">Apex Moto collection</p>
        <h1>Choose your <span>machine.</span></h1>
        <p>
          Explore our lineup by riding style. Find the category that matches
          your road, then choose the motorcycle that feels right.
        </p>
      </section>

      <section className="category-grid" aria-label="Motorcycle categories">
        {productCategories.map((category) => (
          <Link
            className="category-card"
            key={category.slug}
            to={`/products/${category.slug}`}
          >
            <img src={category.image} alt={`${category.name} category`} />
            <div className="category-card-content">
              <p className="category-label">Explore category</p>
              <h2>{category.name}</h2>
              <p>{category.description}</p>
              <span>View bikes <span aria-hidden="true">→</span></span>
            </div>
          </Link>
        ))}
      </section>
    </div>
  );
}

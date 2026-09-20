import { Link, useParams } from "react-router-dom";
import BikeCard from "../components/BikeCard";
import bikes from "../data/bikes";
import { productCategories } from "../data/productCategories";
import "../styles/Products.css";

export default function CategoryPage() {
  const { category: categorySlug } = useParams();
  const category = productCategories.find((item) => item.slug === categorySlug);

  if (!category) {
    return (
      <section className="products-empty">
        <h1>Category not found</h1>
        <Link to="/products">Back to products</Link>
      </section>
    );
  }

  const categoryBikes = bikes.filter((bike) => category.matches.includes(bike.category));

  return (
    <div className="products-page category-page">
      <section className="category-heading">
        <Link className="back-to-products" to="/products">← All categories</Link>
        <p className="eyebrow">Apex Moto collection</p>
        <h1>{category.name}</h1>
        <p>{category.description}</p>
      </section>

      <section className="category-results">
        <div className="results-heading">
          <h2>Available motorcycles</h2>
          <span>{categoryBikes.length} models</span>
        </div>
        <div className="bike-grid">
          {categoryBikes.map((bike) => (
            <BikeCard key={bike.id} bike={bike} />
          ))}
        </div>
      </section>
    </div>
  );
}

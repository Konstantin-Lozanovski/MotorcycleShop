import { useState } from "react";
import bikes from "../data/bikes";
import BikeCard from "./BikeCard";
import "../styles/FeaturedBikes.css";

export default function FeaturedBikes() {
  const [slide, setSlide] = useState(0);
  const slideCount = Math.ceil(bikes.length / 3);

  function moveSlide(direction) {
    setSlide((current) => (current + direction + slideCount) % slideCount);
  }

  return (
    <div className="featured-slider">
      <div className="slider-window">
        <div
          className="slider-track"
          style={{ "--slide": slide }}
        >
        {bikes.map((bike) => (
          <div className="slider-card" key={bike.id}>
            <BikeCard bike={bike} />
          </div>
        ))}
        </div>
      </div>

      <div className="slider-controls">
        <button
          className="slider-arrow"
          onClick={() => moveSlide(-1)}
          aria-label="Previous featured motorcycles"
        >
          ←
        </button>
        <div className="slider-dots" aria-label="Featured motorcycle slides">
          {Array.from({ length: slideCount }, (_, index) => (
            <button
              className={index === slide ? "active" : ""}
              key={index}
              onClick={() => setSlide(index)}
              aria-label={`Show featured slide ${index + 1}`}
              aria-current={index === slide ? "true" : undefined}
            />
          ))}
        </div>
        <button
          className="slider-arrow"
          onClick={() => moveSlide(1)}
          aria-label="Next featured motorcycles"
        >
          →
        </button>
      </div>
    </div>
  );
}
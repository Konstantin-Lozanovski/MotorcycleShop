import { useState } from "react";
import bikes from "../data/bikes";
import BikeCard from "./BikeCard";
import BikeDetails from "./BikeDetails";

export default function FeaturedBikes() {

  return (
    <div>
      <div className="bike-grid">
        {bikes.map((bike) => (
          <BikeCard
            key={bike.id}
            bike={bike}
          />
        ))}
      </div>


    </div>
  );
}
import React from "react";
import Tour from "./Tour";

const Tours = ({ tours, removeTour }) => {
  return (
    <section>
      <div>
        <h2>Our Tours</h2>
      </div>
      <div>
        {tours.map((tour, index) => (
          <Tour key={index} {...tour} removeTour={removeTour} />
        ))}
      </div>
    </section>
  );
};

export default Tours;

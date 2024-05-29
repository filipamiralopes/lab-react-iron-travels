import travelPlansData from "../assets/travel-plans.json";
import { useState } from "react";

const TravelList = () => {
  const [destinations, setDestinations] = useState(travelPlansData);
  return (
    <div >
      {destinations.map((dest) => {
        const {
          id,
          destination,
          image,
          days,
          allInclusive,
          totalCost,
          description,
          parts,
        } = dest;
        return (
          <div key={id} className="destinations">
            <img src={image} />

            <div className="destination-description">
              <h4>
                {destination} ({days} days)
              </h4>
              <i>{description}</i>
              <p>
                <b>Price: </b>
                {totalCost}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TravelList;

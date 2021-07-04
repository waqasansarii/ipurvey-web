import React from "react";
import path from "../../Assets/Path 5106.png";

const Flights = () => {
  return (
    <div className="flights_container">
      <div className="no_flight_md">
        <div className="no_flighht_sd">
          <h4>Delayed Flights this Year</h4>
          <div className="no_flights_cards_md">
            <div className="no_flight_card">
              <h3>2000+</h3>
              <img src={path} alt="..." />
              <p>DOMASTIC FLIGHTS</p>
            </div>
            <div className="no_flight_card">
              <h3>2000+</h3>
              <img src={path} alt="..." />
              <p>DOMASTIC TRAINS</p>
            </div>
            <div className="no_flight_card">
              <h3>2000+</h3>
              <img src={path} alt="..." />
              <p>DOMASTIC FLIGHTS</p>
            </div>
            <div className="no_flight_card">
              <h3>2000+</h3>
              <img src={path} alt="..." />
              <p>DOMASTIC TRAINS</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Flights;

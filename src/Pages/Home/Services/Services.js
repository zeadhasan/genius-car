import React, { useEffect, useState } from "react";
import Service from "../Service/Service";
import "./Services.css";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <section className="container m-5">
      <div className="row">
        <h4 className="services-title">This Is Our Services</h4>
        <div className="services-container m-5">
          {services.map((service) => (
            <Service key={service.id} service={service}></Service>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

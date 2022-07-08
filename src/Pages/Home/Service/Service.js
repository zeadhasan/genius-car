import React from "react";
import "./Service.css";
import { useNavigate } from "react-router-dom";

const Service = ({ service }) => {
  const { id, name, price, description, img } = service;
  const navigate = useNavigate();
  const navigateToServiceDetail = (id) => {
    navigate(`/service/${id}`);
  };

  return (
    <div>
      <div className="service">
        <img className="w-100" src={img} alt="" />
        <h3>This is service {name}</h3>
        <p>{price}</p>
        <p>{description}</p>
        <button
          onClick={() => navigateToServiceDetail(id)}
          className="btn btn-primary"
        >
          Booking: {name}
        </button>
      </div>
    </div>
  );
};

export default Service;

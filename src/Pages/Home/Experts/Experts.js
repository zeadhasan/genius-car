import React from "react";
import expert01 from "../../../images/experts/expert-1.jpg";
import expert02 from "../../../images/experts/expert-2.jpg";
import expert03 from "../../../images/experts/expert-3.jpg";
import expert04 from "../../../images/experts/expert-4.jpg";
import expert05 from "../../../images/experts/expert-5.jpg";
import expert06 from "../../../images/experts/expert-6.png";
import Expert from "../Expert/Expert";

const experts = [
  { id: 1, name: "Will Smith", img: expert01 },
  { id: 2, name: "Will Smith", img: expert02 },
  { id: 3, name: "Will Smith", img: expert03 },
  { id: 4, name: "Will Smith", img: expert04 },
  { id: 5, name: "Will Smith", img: expert05 },
  { id: 6, name: "Will Smith", img: expert06 },
];

const Experts = () => {
  return (
    <div className="container">
      <h2 className="text-primary text-center mt-3">Our Experts</h2>
      <div className="row">
        {experts.map((expert) => (
          <Expert key={expert.id} expert={expert}></Expert>
        ))}
      </div>
    </div>
  );
};

export default Experts;

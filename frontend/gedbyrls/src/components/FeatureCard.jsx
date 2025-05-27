import React from "react";
import "./style/featureCard.css"; 

function FeatureCard({ icon, title }) {
  return (
    <div className="featureCard">
      <div className="featureIcon">{icon}</div>
      <p>{title}</p>
    </div>
  );
}

export default FeatureCard;

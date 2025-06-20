import React from "react";
import "./style/featureCard.css";
import { iconMap } from "./iconMap";


function FeatureCard({ title, icon }) {
  const IconComponent = typeof icon === "string" ? iconMap[icon] : icon;

  return (
    <div className="featureCardContainer">
      {IconComponent && (
        <div className="featureCardIcon">
          {typeof icon === "string" ? <IconComponent /> : IconComponent}
        </div>
      )}
      <p>{title}</p>
    </div>
  );
}

export default FeatureCard;

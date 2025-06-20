//composant wrapper de
import React from "react";
import FeatureCard from "./FeatureCard";


export default function FeatureList({ list, type, className ="featureListContainer" }) {
  return (
    <div className={className}>
      {list.map((item, index) => (
        <FeatureCard
          key={index}
          title={item.title}
          icon={item.icone}
          type={type}
        />
      ))}
    </div>
  );
}
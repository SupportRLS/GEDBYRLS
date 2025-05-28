import React from "react";
import "../components/style/TextImageLeft.css";

function TextImageLeft({ title, text, list, imageSrc, imageAlt }) {
  return (
    <div className="text-image-left">
      <div className="text-content">
        <h2>{title}</h2>
        <p>{text}</p>
       
        {list && list.length > 0 && (
          <ul className="text-list">
            {list.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        )}
      </div>
      <div className="image-content">
        <img src={imageSrc} alt={imageAlt} />
      </div>
    </div>
  );
}

export default TextImageLeft;
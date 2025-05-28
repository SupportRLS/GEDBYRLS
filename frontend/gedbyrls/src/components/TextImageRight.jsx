import React from "react";
import "../components/style/textImageRight.css"; 

function TextImageRight({ title, text, list, imageSrc, imageAlt }) {
  return (
    <div className="text-image-right">
      <div className="text-content">
        <h2>{title}</h2>
        <p>{text}</p>
        {list && list.length > 0 && (
          <ul>
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

export default TextImageRight;
import React from "react";
import "../components/style/TextImageLeft.css";

function TextImageLeft({ title, text, list, imageSrc, imageAlt, children  }) {
  return (
    <div className="til-container">
      <div className="til-image-content">
        <img src={imageSrc} alt={imageAlt} />
      </div>
      <div className="til-text-content">
        <h2>{title}</h2>
        <p>{text}</p>
        {list && list.length > 0 && (
          <ul className="til-text-list">
            {list.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        )}
        {children && <div className="til-children-content">{children}</div>}
      </div>
    </div>
  );
}

export default TextImageLeft;

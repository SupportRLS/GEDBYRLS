import React from "react";
import { Link } from "react-router-dom"; 


import "./style/buttonRed.css";

function ButtonComponentsRed({ text, href, target = "_self" }) {
  return (
    <a href={href} target={target} className="customButtonRed">
      {text}
    </a>
  );
}

export default ButtonComponentsRed;
import React from "react";
import  ButtonComponents from "./ButtonComponents";
import "./style/useCaseCard.css";


function UseCaseCard({ logo, title, description, buttonText, className }) {
    return (
        <div className="useCaseCard">
        <div className="useCaseLogo">{logo}</div>
        <h3>{title}</h3>
        <p>{description}</p>
        <ButtonComponents text={buttonText} /> 
        </div>
    );
    }
    export default UseCaseCard;
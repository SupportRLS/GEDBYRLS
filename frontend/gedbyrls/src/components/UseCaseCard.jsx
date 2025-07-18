import React from "react";
import  ButtonComponents from "./ButtonComponents";
import "./style/useCaseCard.css";


function UseCaseCard({ title, description, buttonText, href ,className }) {
    return (
        <div className="useCaseCard">
    
        <h3>{title}</h3>
        <p>{description}</p>
        <ButtonComponents text={buttonText} href={href}
        
        /> 
        </div>
    );
    }
    export default UseCaseCard;
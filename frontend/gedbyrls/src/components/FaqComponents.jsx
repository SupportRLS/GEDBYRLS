import React from "react";
import "../components/style/faqComponents.css"; 
import { iconMap } from "../components/iconMap";

const { FaAngleDown } = iconMap;

function FaqComponents({ question, answer }) {
    const [isOpen, setIsOpen] = React.useState(false); 
    

    return (
        <div className="faq-component">
           <h3 className="faq-question" onClick={() => setIsOpen(!isOpen)}>
  <span>{question}</span>
  <FaAngleDown className={`faq-icon ${isOpen ? 'open' : ''}`} />
</h3>
<div
  className={`faq-answer-wrapper ${isOpen ? 'open' : ''}`}
  style={{ maxHeight: isOpen ? '500px' : '0px', opacity: isOpen ? 1 : 0 }}
>
  <p className="faq-answer">{answer}</p>
</div>
        </div>
    );
}

export default FaqComponents;
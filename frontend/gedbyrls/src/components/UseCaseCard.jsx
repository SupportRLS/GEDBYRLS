import React from "react";
import ButtonComponents from "./ButtonComponents";

function UseCaseCard({ title, description, buttonText, href, className = "" }) {
  return (
    <div
      className={`bg-[#F5F1EB] rounded-xl p-8 flex flex-col items-center text-center max-w-[300px] shadow-md gap-6 ${className}`}
    >
      <h3 className="text-[#E63946] text-lg font-bold uppercase tracking-wide m-0">
        {title}
      </h3>
      <p className="text-sm leading-relaxed m-0">{description}</p>
      <ButtonComponents text={buttonText} href={href} />
    </div>
  );
}

export default UseCaseCard;

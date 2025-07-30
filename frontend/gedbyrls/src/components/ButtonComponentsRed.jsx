import React from "react";

function ButtonComponentsRed({ text, href, target = "_self" }) {
  return (
    <a
      href={href}
      target={target}
      className="bg-[#F71344] !text-white px-4 py-2 rounded-lg text-base transition-colors duration-300 hover:bg-[#9C0526] cursor-pointer m-4 w-auto inline-block text-center"
    >
      {text}
    </a>
  );
}

export default ButtonComponentsRed;

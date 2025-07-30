import React from "react";

function Button({ text, href, target = "_self" }) {
  return (
    <a
      href={href}
      target={target}
      className="bg-[#E9A431] !text-white px-4 py-2 rounded-lg text-base transition-colors duration-300 hover:bg-[#C38B2D] cursor-pointer m-4 w-auto inline-block text-center"
    >
      {text}
    </a>
  );
}

export default Button;

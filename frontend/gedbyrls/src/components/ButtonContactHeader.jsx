import React from "react";

function ButtonContactHeader() {
  return (
    <div className="text-sm">
      <a
        href="/contact"
        className="bg-[#F71344] !text-white px-4 py-2 rounded-lg text-base transition-colors duration-300 hover:bg-[#C38B2D] cursor-pointer m-4 w-auto inline-block text-center"
      >
        Je veux être contacté
      </a>
    </div>
  );
}

export default ButtonContactHeader;

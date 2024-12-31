import React from "react";

const Button = ({ type, className, label }) => {
  return (
    <button
      type={type}
      className={`px-4 py-2 sm:w-[290px] w-[200px] mx-auto rounded-[10px] h-[50px] text-center   ${className}`}
    >
      {label}
    </button>
  );
};

export default Button;
import React from "react";

const RegularButton = ({ onClick, children, className, disabled, type }) => {
  return (
    <button
      className={`${className} cursor-pointer`}
      onClick={onClick}
      disabled={disabled}
      type={type}
    >
      {children}
    </button>
  );
};

export default RegularButton;

import React from "react";

const Button = ({ cls, label, handleOnClick }) => {
  return (
    <div onClick={handleOnClick} className={"btn " + cls}>
      {label}
    </div>
  );
};

export default Button;

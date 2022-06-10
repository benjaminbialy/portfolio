import React from "react";

function Button({ text = "Click me!", btnFunction }) {
  return (
    <button
      className="p-2"
      onClick={() => {
        btnFunction();
      }}
    >
      {text}
    </button>
  );
}

export default Button;

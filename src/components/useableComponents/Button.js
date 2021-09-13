import React from "react";

export default function Button({ btnText, handleClick }) {
  return (
    <div>
      <button className="btn" onClick={handleClick}>
        {btnText}
      </button>
    </div>
  );
}

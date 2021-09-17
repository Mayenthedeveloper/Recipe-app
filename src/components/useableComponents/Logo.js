import React from "react";
import { link } from "react-router-dom";

export default function Logo() {
  return (
    <div>
      <Link to="/" className="logo">
        Recipes<span>.</span>
      </Link>
    </div>
  );
}

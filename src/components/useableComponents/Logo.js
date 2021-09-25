import React from "react";
import { Link } from "react-router-dom";

export default function Logo() {
  return (
    <div>
      <Link to="/" className="logo">
        Recipes<span>.</span>
      </Link>
    </div>
  );
}

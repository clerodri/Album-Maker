import React, { useState } from "react";
import "../css/ToggleButton.css";

export function ToggleButton({ handle }) {
  const [isActive, setIsActive] = useState(false);
  const toggleButton = () => {
    setIsActive((current) => !current);
  };

  return (
    <button
      className={`toggle-button ${isActive ? "active" : ""}`}
      onClick={handle}
    >
      {isActive ? "Light" : "Dark"}
    </button>
  );
}

export default ToggleButton;

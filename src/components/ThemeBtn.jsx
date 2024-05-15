import React from "react";
import "./ThemeBtn.css";
import useTheme from "../contexts/ThemeContext";

function ThemeBtn() {
  const { themeMode, lightTheme, darkTheme } = useTheme();

  const onChangeBtn = (e) => {
    const darkModeStatus = e.currentTarget.checked;
    if (darkModeStatus) {
      darkTheme();
    } else {
      lightTheme();
    }
  };
  return (
    <div className="container">
      <div className="toggle-switch">
        <input
          type="checkbox"
          className="checkbox"
          value=""
          onChange={onChangeBtn}
          checked={themeMode === "dark"}
        />
      </div>
    </div>
  );
}

export default ThemeBtn;

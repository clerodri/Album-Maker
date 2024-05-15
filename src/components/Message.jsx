import React from "react";
import "../css/Message.css"; // Ensure to create and link this CSS file for styling
import { Link } from "react-router-dom";
export function Message() {
  return (
    <div className="message-container">
      <h1>Thanks for the order!</h1>
      <div>
        <Link to="/">Go to home page</Link>
      </div>
    </div>
  );
}

export default Message;

import React from "react";
import "../css/Message.css";
import { Link } from "react-router-dom";
export function Message() {
  return (
    <div className="message-container">
      <h1>Gracias por su Pedido!</h1>
      <div>
        <Link to="/">Regresar Pagina Principal</Link>
      </div>
    </div>
  );
}

export default Message;

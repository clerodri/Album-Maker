import React from "react";
import { useUserData } from "../contexts/UserDataContext";

export function DeliveryForm({}) {
  const { state, dispatch } = useUserData();
  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch({
      type: "UPDATE_DELIVERY_DATA",
      payload: { ...state.deliveryData, [name]: value },
    });
  };

  return (
    <div className="form-container">
      <h1>Envio</h1>
      <form>
        <div>
          <label>Destinatario:</label>
          <input
            type="text"
            name="destinatario"
            value={state?.deliveryData.destinatario || ""}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Dirección:</label>
          <input
            type="text"
            name="direccion"
            value={state?.deliveryData.direccion || ""}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>País:</label>
          <input
            type="text"
            name="pais"
            value={state?.deliveryData.pais || ""}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Provincia:</label>
          <input
            type="text"
            name="provincia"
            value={state?.deliveryData.provincia || ""}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={state?.deliveryData.email || ""}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Teléfono:</label>
          <input
            type="tel"
            name="telefono"
            value={state?.deliveryData.telefono || ""}
            onChange={handleChange}
            required
          />
        </div>
      </form>
    </div>
  );
}
export default DeliveryForm;

import React, { useState } from "react";

export function DeliveryForm({ deliveryData, setDeliveryData }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setDeliveryData((deliveryData) => ({
      ...deliveryData,
      [name]: value,
    }));
  };

  return (
    <div className="form-container">
      <h1>Datos de Envio</h1>
      <form>
        <div>
          <label>Destinatario:</label>
          <input
            type="text"
            name="destinatario"
            value={deliveryData.destinatario}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Dirección:</label>
          <input
            type="text"
            name="direccion"
            value={deliveryData.direccion}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>País:</label>
          <input
            type="text"
            name="pais"
            value={deliveryData.pais}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Provincia:</label>
          <input
            type="text"
            name="provincia"
            value={deliveryData.provincia}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={deliveryData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Teléfono:</label>
          <input
            type="tel"
            name="telefono"
            value={deliveryData.telefono}
            onChange={handleChange}
            required
          />
        </div>
      </form>
    </div>
  );
}
export default DeliveryForm;

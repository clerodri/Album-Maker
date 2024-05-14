import React, { useState } from "react";

export function BillForm({ form, setFormData, delivery }) {
  const [errors, setErrors] = useState({ email: "" });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === "checkbox" ? checked : value;

    setFormData({
      ...form,
      [name]: newValue,
    });

    // Check if the checkbox for same info was toggled and use the callback
    if (name === "sameInfoForDelivery") {
      delivery(checked); // Call the parent callback function
    }

    if (name === "email") {
      setErrors({
        ...errors,
        email: validateEmail(value) ? "" : "Invalid email format",
      });
    }
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (errors.email) {
      alert("Please provide a valid email");
      return;
    }
    console.log(form);
    // Proceed to the next step
  };

  return (
    <div className="form-container">
      <h1>Datos de Facturacion</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nombres:</label>
          <input
            type="text"
            name="names_bill"
            value={form.names_bill}
            onChange={handleInputChange}
            required
          />
        </div>

        <div>
          <label>Direccion:</label>
          <input
            type="text"
            name="address_bill"
            value={form.address_bill}
            onChange={handleInputChange}
            required
          />
        </div>

        <div>
          <label># RUC:</label>
          <input
            type="text"
            name="ruc_bill"
            value={form.ruc_bill}
            onChange={handleInputChange}
            required
          />
        </div>

        <div>
          <label>Ciudad:</label>
          <input
            type="text"
            name="ciudad_bill"
            value={form.ciudad_bill}
            onChange={handleInputChange}
            required
          />
        </div>

        <div>
          <label>Pais:</label>
          <input
            type="text"
            name="pais_bill"
            value={form.pais_bill}
            onChange={handleInputChange}
            required
          />
        </div>

        <div>
          <label># Telefono:</label>
          <input
            type="tel"
            name="telefono_bill"
            value={form.telefono_bill}
            onChange={handleInputChange}
            required
          />
        </div>

        <div>
          <label>Correo:</label>
          <input
            type="email"
            name="email_bill"
            value={form.email_bill}
            onChange={handleInputChange}
            required
          />
          {errors.email_bill && (
            <p style={{ color: "red" }}>{errors.email_bill}</p>
          )}
        </div>

        <div>
          <label>
            <input
              type="checkbox"
              name="sameInfoForDelivery"
              checked={form.sameInfoForDelivery}
              onChange={handleInputChange}
            />
            Utilizar mismos datos para entrega y facturacion?
          </label>
        </div>
      </form>
    </div>
  );
}

export default BillForm;

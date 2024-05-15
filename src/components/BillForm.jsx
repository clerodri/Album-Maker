import React, { useState } from "react";
import { useUserData } from "../UserDataContext";
export function BillForm({}) {
  const { state, dispatch } = useUserData();
  const [errors, setErrors] = useState({ email: "" });

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    dispatch({
      type: "UPDATE_BILL_DATA",
      payload: { ...state.billData, [name]: value },
    });
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

  return (
    <div className="form-container">
      <h1>Datos de Facturacion</h1>
      <form>
        <div>
          <label>Nombres:</label>
          <input
            type="text"
            name="names_bill"
            value={state?.billData.names_bill || ""}
            onChange={handleInputChange}
            required
          />
        </div>

        <div>
          <label>Direccion:</label>
          <input
            type="text"
            name="address_bill"
            value={state?.billData.address_bill || ""}
            onChange={handleInputChange}
            required
          />
        </div>

        <div>
          <label># RUC:</label>
          <input
            type="text"
            name="ruc_bill"
            value={state?.billData.ruc_bill || ""}
            onChange={handleInputChange}
            required
          />
        </div>

        <div>
          <label>Ciudad:</label>
          <input
            type="text"
            name="ciudad_bill"
            value={state?.billData.ciudad_bill || ""}
            onChange={handleInputChange}
            required
          />
        </div>

        <div>
          <label>Pais:</label>
          <input
            type="text"
            name="pais_bill"
            value={state?.billData.pais_bill || ""}
            onChange={handleInputChange}
            required
          />
        </div>

        <div>
          <label># Telefono:</label>
          <input
            type="tel"
            name="telefono_bill"
            value={state?.billData.telefono_bill || ""}
            onChange={handleInputChange}
            required
          />
        </div>

        <div>
          <label>Correo:</label>
          <input
            type="email"
            name="email_bill"
            value={state?.billData.email_bill || ""}
            onChange={handleInputChange}
            required
          />
          {errors.email_bill && (
            <p style={{ color: "red" }}>{errors.email_bill}</p>
          )}
        </div>
      </form>
    </div>
  );
}

export default BillForm;

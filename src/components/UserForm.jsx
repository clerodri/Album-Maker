import React, { useState } from "react";

export default function UserForm() {
  const [form, setForm] = useState({
    names: "",
    address: "",
    ruc: "",
    state: "",
    country: "",
    phone: "",
    email: "",
    sameInfoForDelivery: false,
  });

  const [errors, setErrors] = useState({ email: "" });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === "checkbox" ? checked : value;

    setForm({
      ...form,
      [name]: newValue,
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
    <form onSubmit={handleSubmit}>
      <div>
        <label>Names:</label>
        <input
          type="text"
          name="names"
          value={form.names}
          onChange={handleInputChange}
          required
        />
      </div>

      <div>
        <label>Address:</label>
        <input
          type="text"
          name="address"
          value={form.address}
          onChange={handleInputChange}
          required
        />
      </div>

      <div>
        <label># RUC:</label>
        <input
          type="text"
          name="ruc"
          value={form.ruc}
          onChange={handleInputChange}
          required
        />
      </div>

      <div>
        <label>State:</label>
        <input
          type="text"
          name="state"
          value={form.state}
          onChange={handleInputChange}
          required
        />
      </div>

      <div>
        <label>Country:</label>
        <input
          type="text"
          name="country"
          value={form.country}
          onChange={handleInputChange}
          required
        />
      </div>

      <div>
        <label># Phone:</label>
        <input
          type="tel"
          name="phone"
          value={form.phone}
          onChange={handleInputChange}
          required
        />
      </div>

      <div>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleInputChange}
          required
        />
        {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
      </div>

      <div>
        <label>
          <input
            type="checkbox"
            name="sameInfoForDelivery"
            checked={form.sameInfoForDelivery}
            onChange={handleInputChange}
          />
          Use same information for delivery?
        </label>
      </div>

      <button type="submit">NEXT</button>
    </form>
  );
}

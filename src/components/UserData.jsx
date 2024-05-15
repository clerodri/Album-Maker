import { React, useState } from "react";
import BillForm from "./BillForm";
import DeliveryForm from "./DeliveryForm";
import { useNavigate } from "react-router-dom";
import "../css/UserForm.css";

export function UserData() {
  const navigate = useNavigate();
  const [showDataDelivery, setShowDataDelivery] = useState(false);

  const handleCheckDelivery = () => {
    setShowDataDelivery(!showDataDelivery);
  };

  const handleResume = () => {
    navigate("/album/resumen", { state: { showDataDelivery } });
  };

  const handleBack = () => {
    navigate("/");
  };

  return (
    <div className="root_data">
      <div className="btn-wrapper">
        <button className="comeback-btn" onClick={handleBack}>
          Regresar
        </button>
      </div>
      <div className="layout_data">
        <BillForm />
        {!showDataDelivery && <DeliveryForm />}
      </div>
      <div>
        <div className="deliveryMessage">
          <label>
            <input
              type="checkbox"
              name="sameInfoForDelivery"
              checked={showDataDelivery}
              onChange={handleCheckDelivery}
            />
            Utilizar los mismos datos de facturacion para datos de envio?
          </label>
        </div>
        <button className="btn_resume" onClick={handleResume}>
          Resumen del Pedido
        </button>
      </div>
    </div>
  );
}

export default UserData;

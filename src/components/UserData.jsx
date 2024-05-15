import { React, useState } from "react";
import BillForm from "./BillForm";
import DeliveryForm from "./DeliveryForm";
import { useNavigate } from "react-router-dom";
import "../css/UserForm.css";
import ResumenUser from "./ResumenUser";

export function UserData() {
  const navigate = useNavigate();
  const [showDataDelivery, setShowDataDelivery] = useState(false);

  const handleCheckDelivery = () => {
    setShowDataDelivery(!showDataDelivery);
  };

  const handleResume = () => {
    navigate("/album/resumen", { state: { showDataDelivery } });
  };
  console.log(showDataDelivery);
  const handleBack = () => {
    navigate("/");
  };

  return (
    <div className="root_data">
      <div>
        <button className="comeback-btn" onClick={handleBack}>
          Regresar
        </button>
      </div>
      <div className="layout_data">
        <BillForm />
        {!showDataDelivery && <DeliveryForm />}
      </div>
      <div>
        <div>
          <label>
            <input
              type="checkbox"
              name="sameInfoForDelivery"
              checked={showDataDelivery}
              onChange={handleCheckDelivery}
            />
            Utilizar mismos datos para entrega y facturacion?
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

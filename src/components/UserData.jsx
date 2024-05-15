import { React, useState } from "react";
import BillForm from "./BillForm";
import DeliveryForm from "./DeliveryForm";
import { useNavigate } from "react-router-dom";
import "../css/UserData.css";
import "../css/Form.css";
import codingImage from "../images/coding.png";
import { useThemeContext } from "../contexts/theme-context";
export function UserData() {
  const { theme } = useThemeContext();
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
    <div className="user-root">
      <div className={`${theme}-userheader`}>
        <img className="image-header" src={codingImage} alt="codigoBootscamp" />
        <div>
          <button className="light-button" onClick={handleBack}>
            Regresar
          </button>
        </div>
        <h1 className="title-header">Datos de Usuario</h1>
      </div>
      <div className={`${theme}-userMain`}>
        <BillForm />
        {!showDataDelivery && <DeliveryForm />}
      </div>
      <div className="user-footer">
        <label>
          <input
            type="checkbox"
            name="sameInfoForDelivery"
            checked={showDataDelivery}
            onChange={handleCheckDelivery}
          />
          Utilizar los mismos datos de facturacion para datos de envio?
        </label>

        <button className="light-button" onClick={handleResume}>
          Resumen del Pedido
        </button>
      </div>
    </div>
  );
}

export default UserData;

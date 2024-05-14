import { React, useState } from "react";
import BillForm from "./BillForm";
import DeliveryForm from "./DeliveryForm";
import ResumeUser from "./ResumenUser";
import "../css/UserForm.css";
export function UserData() {
  const [showDelivery, setshowDelivery] = useState(true);
  const [showResume, setResume] = useState(false);
  const [billFormData, setBillFormData] = useState({
    names_bill: "",
    address_bill: "",
    ruc_bill: "",
    ciudad_bill: "",
    pais_bill: "",
    telefono_bill: "",
    email_bill: "",
    sameInfoForDelivery: false,
  });

  const [deliveryFormData, setDeliveryFormData] = useState({
    destinatario: "",
    direccion: "",
    pais: "",
    provincia: "",
    email: "",
    telefono: "",
  });

  const handleDelivery = (newValue) => {
    setshowDelivery(!newValue);
  };
  const handleResume = () => {
    setResume(true);
  };
  if (showResume) {
    return <ResumeUser dataForm={{ ...billFormData, ...deliveryFormData }} />;
  }
  return (
    <div className="root_data">
      <div className="layout_data">
        <BillForm
          delivery={handleDelivery}
          form={billFormData}
          setFormData={setBillFormData}
        />
        {showDelivery && (
          <DeliveryForm
            deliveryData={deliveryFormData}
            setDeliveryData={setDeliveryFormData}
          />
        )}
      </div>
      <div>
        <button className="btn_resume" onClick={handleResume}>
          Resumen del Pedido
        </button>
      </div>
    </div>
  );
}

export default UserData;

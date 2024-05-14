import React from "react";
import "../css/ResumenUser.css";
import { useContext, useState } from "react";
import { AlbumContext } from "../AlbumContext";
import { Message } from "./Message";

export default function ResumenUser({ dataForm }) {
  const [showThankYou, setShowThankYou] = useState(false);
  console.log(dataForm);
  if (dataForm.sameInfoForDelivery) {
    dataForm = {
      ...dataForm,
      destinatario: dataForm.names_bill,
      direccion: dataForm.address_bill,
      pais: dataForm.pais_bill,
      provincia: dataForm.ciudad_bill,
      email: dataForm.email_bill,
      telefono: dataForm.telefono_bill,
    };
  }

  const handleFinalizar = () => {
    setShowThankYou(true);
  };
  if (showThankYou) {
    return <Message />;
  }

  return (
    <div className="root_resumen">
      <h1>Resumen del Pedido</h1>
      <div className="layout_resumen">
        <div>
          <ResumeList />
        </div>
        <ResumeForm form={dataForm} />
      </div>
      <button onClick={handleFinalizar}>Finalizar pedido</button>
    </div>
  );
}

function ResumeItem({ file, idx }) {
  return (
    <div>
      <img
        className="image-square"
        src={file.preview}
        alt={`preview ${idx}`}
        onClick={() => {
          console.log(idx);
        }}
      />
    </div>
  );
}

function ResumeList() {
  const { state } = useContext(AlbumContext);

  return (
    <div className="resume-grid">
      {state.album.map((file, index) => (
        <ResumeItem key={index} file={file} idx={index} />
      ))}
    </div>
  );
}

function ResumeForm({ form }) {
  return (
    <div className="form-display-container">
      <h2>Informacion de Facturacion</h2>
      <div className="form-display">
        <div>
          <span className="label">Nombres:</span>
          <span className="value">{form.names_bill}</span>
        </div>
        <div>
          <span className="label">Direccion:</span>
          <span className="value">{form.address_bill}</span>
        </div>
        <div>
          <span className="label"># RUC:</span>
          <span className="value">{form.ruc_bill}</span>
        </div>
        <div>
          <span className="label">Provincia:</span>
          <span className="value">{form.ciudad_bill}</span>
        </div>
        <div>
          <span className="label">Pais:</span>
          <span className="value">{form.pais_bill}</span>
        </div>
        <div>
          <span className="label"># Telefono:</span>
          <span className="value">{form.telefono_bill}</span>
        </div>
        <div>
          <span className="label">Email:</span>
          <span className="value">{form.email_bill}</span>
        </div>
      </div>
      <h2>Informacion de Envio</h2>
      <div className="form-display">
        <div>
          <span className="label">Destinatario:</span>
          <span className="value">{form.destinatario}</span>
        </div>
        <div>
          <span className="label">Direccion:</span>
          <span className="value">{form.direccion}</span>
        </div>

        <div>
          <span className="label">Provincia:</span>
          <span className="value">{form.provincia}</span>
        </div>
        <div>
          <span className="label">Pais:</span>
          <span className="value">{form.pais}</span>
        </div>
        <div>
          <span className="label"># Telefono:</span>
          <span className="value">{form.telefono}</span>
        </div>
        <div>
          <span className="label">Email:</span>
          <span className="value">{form.email}</span>
        </div>
      </div>
    </div>
  );
}

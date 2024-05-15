import React from "react";
import "../css/ResumenUser.css";
import "../css/Form.css";
import { useState, useEffect } from "react";
import { useAlbumContext } from "../contexts/AlbumContext";
import { useNavigate } from "react-router-dom";
import { useUserData } from "../contexts/UserDataContext";
import { useLocation } from "react-router-dom";
import codingImage from "../images/coding.png";
import { useThemeContext } from "../contexts/theme-context";
export function ResumenUser() {
  const { theme } = useThemeContext();
  const location = useLocation();
  const { showDataDelivery } = location.state || {};
  const navigate = useNavigate();
  const handleFinalizar = () => {
    navigate("/album/message");
  };

  const handleBack = () => {
    console.log("Navigating back to /album/userdata");
    navigate("/album/userdata");
  };
  return (
    <div className="resume-root">
      <div className={`${theme}-header`}>
        <img className="image-header" src={codingImage} alt="codigoBootscamp" />
        <button className="light-button" onClick={handleBack}>
          Regresar
        </button>
        <h1 className="title-header">Resumen del Pedido</h1>
      </div>
      <div className={`${theme}-mainResume`}>
        <ResumeList />
        <ResumeForm flag={showDataDelivery} />
      </div>
      <div className="footerResume">
        <button className="resume-button" onClick={handleFinalizar}>
          Finalizar pedido
        </button>
      </div>
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
  const { state } = useAlbumContext();

  return (
    <div className="layout-grid">
      {state.album.map((file, index) => (
        <ResumeItem key={index} file={file} idx={index} />
      ))}
    </div>
  );
}

function mergeData(data) {
  const { billData, deliveryData } = data;

  const newState = {
    state: {
      billData: {
        ...billData,
      },
      deliveryData: {
        destinatario: billData.names_bill,
        direccion: billData.address_bill,
        provincia: billData.ciudad_bill,
        pais: billData.pais_bill,
        email: billData.email_bill,
        telefono: billData.telefono_bill,
      },
    },
  };

  return newState;
}

function ResumeForm({ flag }) {
  const { state } = useUserData();
  const [displayData, setDisplayData] = useState({
    billData: state.billData,
    deliveryData: state.deliveryData,
  });

  useEffect(() => {
    if (flag) {
      const newData = mergeData(state);
      setDisplayData(newData.state);
    } else {
      setDisplayData({
        billData: state.billData,
        deliveryData: state.deliveryData,
      });
    }
  }, [flag, state]);
  return (
    <div className="form-display-container">
      <h2>Informacion de Facturacion</h2>
      <div className="form-display">
        <div>
          <span className="label">Nombres:</span>
          <span className="value">{displayData.billData.names_bill}</span>
        </div>
        <div>
          <span className="label">Direccion:</span>
          <span className="value">{displayData.billData.address_bill}</span>
        </div>
        <div>
          <span className="label"># RUC:</span>
          <span className="value">{displayData.billData.ruc_bill}</span>
        </div>
        <div>
          <span className="label">Provincia:</span>
          <span className="value">{displayData.billData.ciudad_bill}</span>
        </div>
        <div>
          <span className="label">Pais:</span>
          <span className="value">{displayData.billData.pais_bill}</span>
        </div>
        <div>
          <span className="label"># Telefono:</span>
          <span className="value">{displayData.billData.telefono_bill}</span>
        </div>
        <div>
          <span className="label">Email:</span>
          <span className="value">{displayData.billData.email_bill}</span>
        </div>
      </div>
      <h2>Informacion de Envio</h2>
      <div className="form-display">
        <div>
          <span className="label">Destinatario:</span>
          <span className="value">{displayData.deliveryData.destinatario}</span>
        </div>
        <div>
          <span className="label">Direccion:</span>
          <span className="value">{displayData.deliveryData.direccion}</span>
        </div>

        <div>
          <span className="label">Provincia:</span>
          <span className="value">{displayData.deliveryData.provincia}</span>
        </div>
        <div>
          <span className="label">Pais:</span>
          <span className="value">{displayData.deliveryData.pais}</span>
        </div>
        <div>
          <span className="label"># Telefono:</span>
          <span className="value">{displayData.deliveryData.telefono}</span>
        </div>
        <div>
          <span className="label">Email:</span>
          <span className="value">{displayData.deliveryData.email}</span>
        </div>
      </div>
    </div>
  );
}

export default ResumenUser;

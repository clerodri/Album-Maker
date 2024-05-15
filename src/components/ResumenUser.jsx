import React from "react";
import "../css/ResumenUser.css";
import { useContext, useState, useEffect } from "react";
import { AlbumContext } from "../AlbumContext";
import { useNavigate } from "react-router-dom";
import { useUserData } from "../UserDataContext";
import { useLocation } from "react-router-dom";
export function ResumenUser() {
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
    <div className="root_resumen">
      <div className="navBar_resumen">
        <button onClick={handleBack}>Regresar</button>
        <h1>Resumen del Pedido</h1>
      </div>
      <div className="layout_resumen">
        <div>
          <ResumeList />
        </div>
        <ResumeForm flag={showDataDelivery} />
      </div>
      <div className="btn_finalizar">
        <button onClick={handleFinalizar}>Finalizar pedido</button>
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
  const { state } = useContext(AlbumContext);

  return (
    <div className="resume-grid">
      {state.album.map((file, index) => (
        <ResumeItem key={index} file={file} idx={index} />
      ))}
    </div>
  );
}

function mergeData(data) {
  const { billData, deliveryData } = data;

  // Create a new object merging the two data sets
  const newState = {
    state: {
      billData: {
        ...billData, // Spread existing billData
        // Add specific overrides or additional fields if necessary
      },
      deliveryData: {
        // Spread existing deliveryData
        destinatario: billData.names_bill, // Copy from billData
        direccion: billData.address_bill,
        provincia: billData.ciudad_bill, // Assuming a mistake in the description; copying ciudad from ciudad_bill
        pais: billData.pais_bill, // Optionally copying pais, even though the example left it empty
        email: billData.email_bill,
        telefono: billData.telefono_bill,
      },
    },
  };

  return newState;
}

function ResumeForm({ flag }) {
  const { state, dispatch } = useUserData();
  const [displayData, setDisplayData] = useState({
    billData: state.billData,
    deliveryData: state.deliveryData,
  });

  useEffect(() => {
    if (flag) {
      // Merge billData into deliveryData when flag is false
      const newData = mergeData(state);
      setDisplayData(newData.state);
    } else {
      // Use original state data when flag is true
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

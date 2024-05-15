import React, { createContext, useReducer, useContext } from "react";

export const initialState = {
  billData: {
    names_bill: "",
    address_bill: "",
    ruc_bill: "",
    ciudad_bill: "",
    pais_bill: "",
    telefono_bill: "",
    email_bill: "",
  },
  deliveryData: {
    destinatario: "",
    direccion: "",
    provincia: "",
    pais: "",
    email: "",
    telefono: "",
  },
};
export const UserDataContext = createContext(initialState);
function reducer(state, action) {
  switch (action.type) {
    case "UPDATE_BILL_DATA":
      console.log(state.billData);
      return { ...state, billData: { ...state.billData, ...action.payload } };
    case "UPDATE_DELIVERY_DATA":
      console.log(state.deliveryData);
      return {
        ...state,
        deliveryData: { ...state.deliveryData, ...action.payload },
      };

    default:
      return state;
  }
}
export const UserDataProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <UserDataContext.Provider value={{ state, dispatch }}>
      {children}
    </UserDataContext.Provider>
  );
};
export const useUserData = () => {
  const context = useContext(UserDataContext);

  if (context === undefined) {
    throw new Error("useUserData must be used within a UserDataProvider");
  }

  return context;
};

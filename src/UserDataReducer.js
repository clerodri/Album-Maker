const initialState = {
  billData: {},
  deliveryData: {},
  showDelivery: true,
};

function reducer(state, action) {
  switch (action.type) {
    case "UPDATE_BILL_DATA":
      return { ...state, billData: action.payload };
    case "UPDATE_DELIVERY_DATA":
      return { ...state, deliveryData: action.payload };
    case "TOGGLE_RESUME":
      return { ...state, showResume: !state.showResume };
    default:
      return state;
  }
}

export default reducer;

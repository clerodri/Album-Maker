export const initialState = {
  album: [],
  showForm: false,
  draggedIdx: null,
};

const albumReducer = (state, action) => {
  switch (action.type) {
    case "ADD_IMAGES":
      if (state.album.length > 0) return state;
      return {
        ...state,
        album: [
          ...state.album,
          ...action.payload.map((file) => ({
            ...file,
            preview: URL.createObjectURL(file),
          })),
        ],
      };

    case "MOVE_IMAGE":
      const { draggedIdx, dropIndex } = action.payload;
      if (draggedIdx === null || draggedIdx === dropIndex) return state;
      const newAlbum = [...state.album];
      const draggedItem = newAlbum[draggedIdx];
      newAlbum.splice(draggedIdx, 1);
      newAlbum.splice(dropIndex, 0, draggedItem);
      return {
        ...state,
        album: newAlbum,
        draggedIdx: null,
      };

    case "SET_DRAGGED_INDEX":
      return {
        ...state,
        draggedIdx: action.payload,
      };

    case "TOGGLE_FORM":
      return {
        ...state,
        showForm: !state.showForm,
      };

    default:
      return state;
  }
};

export default albumReducer;

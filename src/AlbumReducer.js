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
      console.log("Dragged Index:", draggedIdx);
      console.log("Drop Index:", dropIndex);

      if (draggedIdx === null || draggedIdx === dropIndex) return state; // No operation needed if indices are the same

      // Clone the current album to a new array to maintain immutability
      const newAlbum = [...state.album];

      // Perform the swap
      const temp = newAlbum[draggedIdx];
      newAlbum[draggedIdx] = newAlbum[dropIndex];
      newAlbum[dropIndex] = temp;
      return {
        ...state,
        album: newAlbum,
        draggedIdx: null, // Resetting the dragged index
      };

    case "SET_DRAGGED_INDEX":
      return {
        ...state,
        draggedIdx: action.payload,
      };
    // In your reducer:
    case "TOGGLE_ALBUM_FORM":
      return { ...state, showForm: !state.showForm };

    default:
      return state;
  }
};

export default albumReducer;

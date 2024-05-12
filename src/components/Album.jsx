import { useDropzone } from "react-dropzone";
import UserForm from "./UserForm";
import { useContext } from "react";
import { AlbumContext } from "../AlbumContext";

export function Album() {
  const { state, dispatch } = useContext(AlbumContext);

  const { getRootProps, getInputProps } = useDropzone({
    accept: "image/*",
    noClick: state.album.length > 0,
    onDrop: (acceptedFiles) => {
      const filesWithPreview = acceptedFiles.map((file) => ({
        ...file,
        preview: URL.createObjectURL(file),
      }));
      console.log(filesWithPreview);
      dispatch({ type: "ADD_IMAGES", payload: acceptedFiles });
    },
  });
  const onDrop = (dropIndex) => {
    dispatch({
      type: "MOVE_IMAGE",
      payload: { draggedIdx: state.draggedIdx, dropIndex },
    });
  };

  return (
    <div className="main_layout">
      <div {...getRootProps()} className="grid-container">
        <input {...getInputProps()} />
        <ImagesList handleDrop={onDrop} />
      </div>
      <button onClick={() => dispatch({ type: "TOGGLE_FORM" })}>
        {state.showForm ? "Hide Form" : "Show Form"}
      </button>
      {state.showForm && <UserForm />}
    </div>
  );
}

function ImageItem({ file, idx, onDrop }) {
  const { dispatch } = useContext(AlbumContext);
  return (
    <div
      className="image-square"
      key={idx}
      draggable="true"
      onDragStart={() => dispatch({ type: "SET_DRAGGED_INDEX", payload: idx })}
      onDrop={() => onDrop(idx)}
      onDragOver={(e) => e.preventDefault()}
    >
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

function ImagesList({ handleDrop }) {
  const { state, dispatch } = useContext(AlbumContext);

  if (!state.album.length) {
    return <div>No images found. Please upload some pictures.</div>;
  }
  return (
    <div className="layout">
      {state.album.map((file, index) => (
        <ImageItem
          key={index}
          file={file}
          idx={index}
          onDragStart={() =>
            dispatch({ type: "SET_DRAGGED_INDEX", payload: index })
          }
          onDrop={() => handleDrop(index)}
        />
      ))}
    </div>
  );
}

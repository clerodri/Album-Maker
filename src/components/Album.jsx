import { useDropzone } from "react-dropzone";
import { useContext, useState } from "react";
import { AlbumContext } from "../AlbumContext";
import codingImage from "../images/coding.png";
import UserData from "./UserData";

export function Album() {
  const { state, dispatch } = useContext(AlbumContext);
  const [showForm, setShowForm] = useState(false);
  const { getRootProps, getInputProps } = useDropzone({
    accept: "image/*",
    noClick: state.album.length > 0,
    onDrop: (acceptedFiles) => {
      console.log(acceptedFiles);
      dispatch({ type: "ADD_IMAGES", payload: acceptedFiles });
    },
  });

  const onDragStart = (index) => {
    console.log("Dragging:", index);
    dispatch({ type: "SET_DRAGGED_INDEX", payload: index });
  };
  const onDrop = (dropIndex) => {
    console.log("Dropping on:", dropIndex);
    dispatch({
      type: "MOVE_IMAGE",
      payload: { draggedIdx: state.draggedIdx, dropIndex },
    });
  };
  const handleContinue = () => {
    if (state.album.length > 0) {
      setShowForm(true);
    }
  };
  if (showForm) {
    return <UserData />;
  }
  return (
    <div>
      <div className="navBar">
        <img src={codingImage} alt="coding-img" />
        <h1 className="name-app">Album Maker</h1>
        <button onClick={handleContinue}>Continuar</button>
      </div>
      <div className="layout" {...getRootProps()}>
        <input {...getInputProps()} />
        <ImagesList handleDragStart={onDragStart} handleDrop={onDrop} />
      </div>
    </div>
  );
}

function ImageItem({ file, idx, onDragStart, onDrop }) {
  return (
    <div
      key={idx}
      draggable="true"
      onDragStart={() => onDragStart(idx)}
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

function ImagesList({ handleDragStart, handleDrop }) {
  const { state } = useContext(AlbumContext);

  if (!state.album.length) {
    return (
      <div className="info-text">
        ---- Arrastre imagenes para mostrar. ------
      </div>
    );
  }
  return (
    <div className="grid-container">
      {state.album.map((file, index) => (
        <ImageItem
          key={index}
          file={file}
          idx={index}
          onDragStart={() => handleDragStart(index)}
          onDrop={() => handleDrop(index)}
        />
      ))}
    </div>
  );
}

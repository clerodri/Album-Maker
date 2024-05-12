import { useDropzone } from "react-dropzone";
import { useContext } from "react";
import { AlbumContext } from "../AlbumContext";
import { Link } from "react-router-dom";
import Form from "../pages/Form";
export function Album() {
  const { state, dispatch } = useContext(AlbumContext);

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

  return (
    <div className="layout" {...getRootProps()}>
      <div className="navBar">
        <h1 className="name-app">Album Maker</h1>
        <button>
          <Link>Continuar</Link>
        </button>
      </div>
      <input {...getInputProps()} />
      <ImagesList handleDragStart={onDragStart} handleDrop={onDrop} />
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
    return <div>No images found. Please upload some pictures.</div>;
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

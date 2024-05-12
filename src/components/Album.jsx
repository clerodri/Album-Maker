import { useDropzone } from "react-dropzone";
import { useContext } from "react";
import { AlbumContext } from "../AlbumContext";
import { Link } from "react-router-dom";
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
    <div className="layout" {...getRootProps()}>
      <div className="navBar">
        <h1 className="name-app">Album Maker</h1>
        <button>
          <Link>NEXT</Link>
        </button>
      </div>
      <input {...getInputProps()} />
      <ImagesList handleDrop={onDrop} />
    </div>
  );
}

function ImageItem({ file, idx, onDrop }) {
  const { dispatch } = useContext(AlbumContext);
  return (
    <div
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
    <div className="grid-container">
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

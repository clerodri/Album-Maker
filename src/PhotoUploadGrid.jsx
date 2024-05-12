import React, { useState } from "react";
import { useDropzone } from "react-dropzone";
import RGL, { WidthProvider } from "react-grid-layout";

const ReactGridLayout = WidthProvider(RGL);

function PhotoUploadGrid() {
  const [photos, setPhotos] = useState([]);

  const { getRootProps, getInputProps } = useDropzone({
    accept: "image/*",
    onDrop: (acceptedFiles) => {
      const newPhotos = acceptedFiles.map((file) =>
        Object.assign(file, {
          preview: URL.createObjectURL(file),
        })
      );
      setPhotos([...photos, ...newPhotos]);
    },
  });

  const layout = photos.map((photo, i) => ({
    i: i.toString(),
    x: i % 4,
    y: 0,
    w: 1,
    h: 1,
  }));

  return (
    <div>
      <div {...getRootProps({ className: "dropzone" })}>
        <input {...getInputProps()} />
        <p>Drag 'n' drop some files here, or click to select files</p>
      </div>
      <ReactGridLayout
        className="layout"
        layout={layout}
        cols={5}
        rowHeight={200}
      >
        {photos.map((photo, i) => (
          <div key={i} style={{ textAlign: "center" }}>
            <img
              src={photo.preview}
              style={{ width: "80%", height: "" }}
              alt="preview"
            />
          </div>
        ))}
      </ReactGridLayout>
    </div>
  );
}

export default PhotoUploadGrid;

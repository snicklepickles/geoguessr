import React from "react";
import ReactPannellum from "react-pannellum";

function ImageViewer({ imageUrl }) {
  const config = {
    autoLoad: true,
  };

  const style = {
    width: "100vw",
    height: "100vh",
    background: "#000000",
  };

  return (
    <ReactPannellum
      id="1"
      sceneId="firstScene"
      imageSource={imageUrl}
      config={config}
      style={style}
    />
  );
}

export default ImageViewer;

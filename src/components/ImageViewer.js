import React from "react";
import ReactPannellum, { getConfig } from "react-pannellum";

class ImageViewer extends React.Component {
  click() {
    console.log(getConfig("firstScene"));
  }

  render() {
    const { imageUrl } = this.props;

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
}

export default ImageViewer;

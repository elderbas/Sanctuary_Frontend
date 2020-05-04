import React, { Component } from "react";
import YouTube from "@u-wave/react-youtube";

class Video extends Component {
  render() {
    return (
      <div className="Video">
        <YouTube
          video="zTBmv-Gzf2w"
          autoplay
          width="425px"
          height="238px"
          muted="true"
        />
      </div>
    );
  }
}

export default Video;

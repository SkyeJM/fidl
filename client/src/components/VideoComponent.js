import React from 'react';

const VideoComponent = ({ videoSrc }) => {
  return (
    <video width="320" height="240" controls>
      <source src={videoSrc} type="video/mp4"/>
      Your browser does not support the video tag.
    </video>
  );
}

export default VideoComponent;

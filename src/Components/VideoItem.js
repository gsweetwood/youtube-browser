import React from "react";

const VideoItem = ({ video, onSelectedVideo }) => {
  return (
    <div className="ui segment" onClick={() => onSelectedVideo(video)}>
      <div className="vid">
        <img src={video.snippet.thumbnails.medium.url} alt="video thumbnail" />
        <div className="content">
          {video.snippet.title}

          {/* <div className="description">{video.snippet.description}</div> */}
        </div>
      </div>
    </div>
  );
};

export default VideoItem;

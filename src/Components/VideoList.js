import React from "react";
import VideoItem from "./VideoItem";
import "./VList.css";

class VideoList extends React.Component {
  render() {
    return this.props.videos.map(video => {
      return (
        //the prop Key needs to be in the highest div/jsx element
        <div className=".item">
          <VideoItem
            onSelectedVideo={this.props.onSelectedVideo}
            video={video}
            key={video.id.videoId}
          />
        </div>
      );
    });
  }
}

export default VideoList;

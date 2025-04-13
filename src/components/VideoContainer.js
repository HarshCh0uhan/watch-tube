import React from "react";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";
import useVideosInfo from "./useVideosInfo";

const VideoContainer = () => {
  const videos = useVideosInfo();

  return !videos || videos.length === 0 ? (
    <h1 className="text-center text-2xl mt-20">Loading video...</h1>
  ) : (
    <div className="flex flex-wrap justify-center">
      {videos.map((video) => (
        <Link key={video.id} to={"/watch?v=" + video.id}>
          <VideoCard info={video} />
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;

import { YOUTUBE_VIDEOS_API } from "../utils/constants";
import { useCallback, useEffect, useState } from "react";

const useVideosInfo = () => {
  const [videos, setVideos] = useState([]);

  const getVideos = useCallback(async () => {
    const data = await fetch(YOUTUBE_VIDEOS_API);
    const json = await data.json();
    setVideos(json.items);
  }, []);

  useEffect(() => {
    getVideos();
  }, [getVideos]);

  return videos;
};

export default useVideosInfo;

import React, { useEffect, useState } from "react";
import { YOUTUBE_VIDEOS_API } from "../utils/constants";
import VideoCard from "./VideoCard";

const VideoContainer = () => {

    const [videos, setVideos] = useState([])

    const getVideos = async () => {
        const data = await fetch(YOUTUBE_VIDEOS_API);

        const json = await data.json() 

        // console.log(json.items);

        setVideos(json.items);
    }

    useEffect(() => {
        getVideos();
    }, [])

    return (!videos) ? <h1>404 Something Went Wrong !!!</h1> : (
        <div className="flex flex-wrap justify-center">
            {videos.map((video) => <VideoCard key={video.id} info={video}/>)}
        </div>
    )
}

export default VideoContainer;
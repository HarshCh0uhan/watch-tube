import React, { useEffect } from 'react'
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from 'react-router-dom';
import CommentsContainer from './CommentsContainer';
import useVideosInfo from "./useVideosInfo";
import { ThumbsUp } from 'lucide-react';
import { Link } from 'react-router-dom';

const WatchPages = () => {
  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();
  const videos = useVideosInfo();
  
  const videoId = searchParams.get("v");

  useEffect(() => {
    dispatch(closeMenu())
  }, [dispatch]);

  const videoInfo = videos.find(video => video.id === videoId)
  if (!videoInfo) {
    return <h1 className="text-center text-2xl mt-20">Loading video...</h1>
  }
  
  const {snippet, statistics} = videoInfo
  const {description, title, channelTitle, publishedAt, tags} = snippet;
  const {commentCount, likeCount, viewCount} = statistics;

  return (
    <div className="flex flex-col lg:flex-row mx-auto px-4 lg:px-6 mr-10 py-4 gap-10">
      {/* Main video and content section */}
      <div className="w-full lg:w-2/3 xl:w-3/4">
        <div className="aspect-video w-full">
          <iframe 
            src={"https://www.youtube.com/embed/" + videoId} 
            title="YouTube video player" 
            frameBorder="0" 
            className="w-full h-full rounded-lg"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            referrerPolicy="strict-origin-when-cross-origin" 
            allowFullScreen
          ></iframe>
        </div>
        
        <div className="mt-3">
          <h1 className="text-xl font-bold line-clamp-2">{title}</h1>
          
          <div className="flex flex-wrap justify-between items-center mt-3 mb-2">
            <div className="flex items-center gap-3 my-2">
              <div className="font-medium">{channelTitle}</div>
              <button className="bg-gray-100 hover:bg-gray-200 px-4 py-1.5 rounded-full text-sm font-medium">Subscribe</button>
            </div>
            
            <div className="flex items-center">
              <div className="flex items-center gap-2 bg-gray-100 hover:bg-gray-200 px-4 py-1.5 rounded-full cursor-pointer">
                <ThumbsUp size={16} />
                <span className="text-sm font-medium">{likeCount}</span>
              </div>
            </div>
          </div>
          
          <div className="mt-4 bg-gray-100 p-3 rounded-xl">
            <div className="flex flex-wrap gap-x-4 text-sm mb-2">
              <span className="font-medium">{viewCount} views</span>
              <span>{new Date(publishedAt).toLocaleDateString("en-IN", {
                year: "numeric",
                month: "long",
                day: "numeric"
              })}</span>
            </div>
            
            <div className="text-sm mt-2 line-clamp-3 hover:line-clamp-none transition-all duration-300">
              {description}
            </div>
            
            {tags && tags.length > 0 && (
              <div className="flex flex-wrap mt-2 gap-2 text-xs text-blue-600">
                {tags.slice(0, 5).map((tag, index) => (
                  <span key={index}>#{tag}</span>
                ))}
                {tags.length > 5 && <span>+{tags.length - 5} more</span>}
              </div>
            )}
          </div>
          
          <div className="mt-6">
            <CommentsContainer comment={commentCount}/>
          </div>
        </div>
      </div>
      
      {/* Related videos section */}
      <div className="w-full lg:w-1/3 xl:w-1/4">
        <div className="space-y-3">
          {videos.map((video) => (
            <Link 
              key={video.id} 
              to={"/watch?v=" + video.id}
              className="block"
            >
              <div className="flex gap-2">
                <div className="w-40 h-24 flex-shrink-0">
                  <img 
                    src={video.snippet?.thumbnails?.medium?.url || "/thumbnail-placeholder.jpg"} 
                    alt={video.snippet?.title} 
                    className="w-full h-full object-cover rounded"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-sm font-medium line-clamp-2">{video.snippet?.title}</h3>
                  <p className="text-xs text-gray-600 mt-1">{video.snippet?.channelTitle}</p>
                  <div className="flex gap-1 text-xs text-gray-600 mt-1">
                    <span>{video.statistics?.viewCount || 0} views</span>
                    <span>•</span>
                    <span>{new Date(video.snippet?.publishedAt).toLocaleDateString()}</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default WatchPages
import React from "react";
import { useSelector } from "react-redux";

const SideBar = () => {

    const isMenuOpen = useSelector((store) => store.app.isMenuOpen)
 
    return (!isMenuOpen) ? null : (
        <div className="w-auto h-auto bg-gray-100 shadow-2xl p-5 gap-5 flex flex-col">
            <h1 className="font-bold border-b-2 py-3 cursor-pointer">Home</h1>
            <ul>
                <li className="cursor-pointer">History</li>
                <li className="cursor-pointer">Watch Later</li>
                <li className="cursor-pointer">Playlists</li>
                <li className="cursor-pointer">Liked Videos</li>
            </ul>
            <h1 className="font-bold border-b-2 py-3 cursor-pointer">Entertainment</h1>
            <ul>
                <li className="cursor-pointer">Music</li>
                <li className="cursor-pointer">Sports</li>
                <li className="cursor-pointer">Gaming</li>
                <li className="cursor-pointer">Movies</li>
                <li className="cursor-pointer">Music</li>
            </ul>
            <h1 className="font-bold border-b-2 py-3 cursor-pointer">Explore</h1>
            <ul>
                <li className="cursor-pointer">Trending</li>
                <li className="cursor-pointer">News</li>
                <li className="cursor-pointer">Podcasts</li>
                <li className="cursor-pointer">Fashion & Beauty</li>
                <li className="cursor-pointer">Lifestyle</li>
                <li className="cursor-pointer">Culture</li>
            </ul>
        </div>
    )
}

export default SideBar;
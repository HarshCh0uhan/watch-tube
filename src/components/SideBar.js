import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const SideBar = () => {
    const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
 
    // If menu is not open, return a narrow collapsed sidebar (just icons)
    if (!isMenuOpen) {
        return (
            <div className="fixed top-16 left-0 h-screen w-20 bg-white z-10 overflow-y-auto py-2 hidden sm:block">
                {/* Collapsed sidebar with just icons would go here */}
            </div>
        );
    }
    
    // If menu is open, return the full sidebar
    return (
        <div className="fixed top-16 left-0 h-screen w-48 bg-white overflow-y-auto z-10 shadow-md">
            <div className="px-3 py-2">
                <Link to="/">
                    <div className="flex items-center py-2 px-3 rounded-lg hover:bg-gray-100">
                        <span className="text-sm">Home</span>
                    </div>
                </Link>
                
                <Link to="/history">
                    <div className="flex items-center py-2 px-3 rounded-lg hover:bg-gray-100">
                        <span className="text-sm">History</span>
                    </div>
                </Link>
                
                <Link to="/watchlater">
                    <div className="flex items-center py-2 px-3 rounded-lg hover:bg-gray-100">
                        <span className="text-sm">Watch Later</span>
                    </div>
                </Link>
                
                <Link to="/playlists">
                    <div className="flex items-center py-2 px-3 rounded-lg hover:bg-gray-100">
                        <span className="text-sm">Playlists</span>
                    </div>
                </Link>
                
                <Link to="/likedvideos">
                    <div className="flex items-center py-2 px-3 rounded-lg hover:bg-gray-100">
                        <span className="text-sm">Liked Videos</span>
                    </div>
                </Link>
                
                <div className="border-t mt-3 pt-3">
                    <h3 className="text-xs font-medium text-gray-500 px-3 mb-1">Entertainment</h3>
                    
                    <Link to="/music">
                        <div className="flex items-center py-2 px-3 rounded-lg hover:bg-gray-100">
                            <span className="text-sm">Music</span>
                        </div>
                    </Link>
                    
                    <Link to="/sports">
                        <div className="flex items-center py-2 px-3 rounded-lg hover:bg-gray-100">
                            <span className="text-sm">Sports</span>
                        </div>
                    </Link>
                    
                    <Link to="/gaming">
                        <div className="flex items-center py-2 px-3 rounded-lg hover:bg-gray-100">
                            <span className="text-sm">Gaming</span>
                        </div>
                    </Link>
                    
                    <Link to="/movies">
                        <div className="flex items-center py-2 px-3 rounded-lg hover:bg-gray-100">
                            <span className="text-sm">Movies</span>
                        </div>
                    </Link>
                </div>
                
                <div className="border-t mt-3 pt-3">
                    <h3 className="text-xs font-medium text-gray-500 px-3 mb-1">Explore</h3>
                    
                    <Link to="/trending">
                        <div className="flex items-center py-2 px-3 rounded-lg hover:bg-gray-100">
                            <span className="text-sm">Trending</span>
                        </div>
                    </Link>
                    
                    <Link to="/news">
                        <div className="flex items-center py-2 px-3 rounded-lg hover:bg-gray-100">
                            <span className="text-sm">News</span>
                        </div>
                    </Link>
                    
                    <Link to="/podcasts">
                        <div className="flex items-center py-2 px-3 rounded-lg hover:bg-gray-100">
                            <span className="text-sm">Podcasts</span>
                        </div>
                    </Link>
                    
                    <Link to="/fashion">
                        <div className="flex items-center py-2 px-3 rounded-lg hover:bg-gray-100">
                            <span className="text-sm">Fashion & Beauty</span>
                        </div>
                    </Link>
                    
                    <Link to="/lifestyle">
                        <div className="flex items-center py-2 px-3 rounded-lg hover:bg-gray-100">
                            <span className="text-sm">Lifestyle</span>
                        </div>
                    </Link>
                    
                    <Link to="/culture">
                        <div className="flex items-center py-2 px-3 rounded-lg hover:bg-gray-100">
                            <span className="text-sm">Culture</span>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default SideBar;
import { RiAccountCircleFill, RiMenu5Line, RiMicFill, RiMovieFill, RiNotification3Fill, RiSearchLine, RiVideoUploadFill } from "@remixicon/react";
import {toggleMenu} from "../utils/appSlice";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useCallback, useEffect, useState } from "react";
import { YOUTUBE_SUGGETION_API } from "../utils/constants";
import {cacheResults} from "../utils/searchSlice"

const Head = () => {

    const [searchQuery, setSearchQuery] = useState("")
    const [suggetions, setSuggetions] = useState([])
    const [showSuggetions, setShowSuggetions] = useState(false)
    const dispatch = useDispatch();
    const searchCache = useSelector(store => store.search)
    
    // console.log(suggetions);

    const searchSuggetion = useCallback(async () => {
        // console.log("API - " + searchQuery);

        const data = await fetch(YOUTUBE_SUGGETION_API + searchQuery);

        const json = await data.json();

        // console.log(json[1]);

        setSuggetions(json[1])

        dispatch(cacheResults({
            [searchQuery]: json[1]
        }))
    }, [searchQuery, dispatch])
    
    useEffect(() => {
        const timer = setTimeout(() => (searchCache[searchQuery]) ? setSuggetions(searchCache[searchQuery]) : searchSuggetion(), 200);
        
        const handleScroll = () => setShowSuggetions(false);
        
        window.addEventListener('scroll', handleScroll);
        
        return () => {
           window.removeEventListener('scroll', handleScroll);
           clearTimeout(timer)
        //    console.log("cleared")
       }
    }, [searchQuery, searchCache, searchSuggetion])
    

    const handleMenu = () => {
        dispatch(toggleMenu())
    }

    return (
        <div className="flex items-center justify-between h-[70px] px-8 shadow-md bg-white fixed top-0 left-0 right-0 z-50">
        {/* Left - Logo & Menu */}
        <div className="flex items-center gap-4">
          <button onClick={handleMenu}>
            <RiMenu5Line className="text-2xl" />
          </button>
          <Link to="/" className="flex items-center gap-2">
            <RiMovieFill size={28} />
            <span className="text-xl font-semibold">WatchTube</span>
          </Link>
        </div>
      
        {/* Middle - Search */}
        <div className="relative w-[400px]">
          <input
            type="search"
            className="w-full h-10 rounded-full border px-5 pr-10 focus:outline-none"
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggetions(true)}
            onBlur={() => setTimeout(() => setShowSuggetions(false), 100)}
          />
          <RiSearchLine className="absolute right-3 top-2.5 text-gray-500" />
          
          {showSuggetions && (
            <ul className="absolute z-10 bg-white border mt-1 w-full rounded-md shadow-md">
              {suggetions.map((s) => (
                <li
                  key={s}
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  onClick={() => setSearchQuery(s)}
                >
                  {s}
                </li>
              ))}
            </ul>
          )}
        </div>
      
        {/* Right - Icons */}
        <div className="flex items-center gap-4">
          <button><RiMicFill className="text-xl" /></button>
          <button><RiVideoUploadFill className="text-xl" /></button>
          <button><RiNotification3Fill className="text-xl" /></button>
          <button><RiAccountCircleFill size={28} /></button>
        </div>
      </div>
      
    )
}

export default Head;
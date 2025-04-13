import { RiAccountCircleFill, RiMenu5Line, RiMicFill, RiMovieFill, RiNotification3Fill, RiSearchLine, RiVideoUploadFill } from "@remixicon/react";
import {toggleMenu} from "../utils/appSlice";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { YOUTUBE_SUGGETION_API } from "../utils/constants";
import {cacheResults} from "../utils/searchSlice"

const Head = () => {

    const [searchQuery, setSearchQuery] = useState("")
    const [suggetions, setSuggetions] = useState([])
    const [showSuggetions, setShowSuggetions] = useState(false)
    const dispatch = useDispatch();
    const searchCache = useSelector(store => store.search)
    
    // console.log(suggetions);

    const searchSuggetion = async () => {
        // console.log("API - " + searchQuery);

        const data = await fetch(YOUTUBE_SUGGETION_API + searchQuery);

        const json = await data.json();

        // console.log(json[1]);

        setSuggetions(json[1])

        dispatch(cacheResults({
            [searchQuery]: json[1]
        }))
    }
    
    useEffect(() => {
        const timer = setTimeout(() => (searchCache[searchQuery]) ? setSuggetions(searchCache[searchQuery]) : searchSuggetion(), 200);
        
        const handleScroll = () => setShowSuggetions(false);
        
        window.addEventListener('scroll', handleScroll);
        
        return () => {
           window.removeEventListener('scroll', handleScroll);
           clearTimeout(timer)
        //    console.log("cleared")
       }
    }, [searchQuery])
    

    const handleMenu = () => {
        dispatch(toggleMenu())
    }

    return (
            <div className="grid grid-flow-col justify-between h-[70px] px-10 m-auto shadow-lg items-center">
                <div className="flex gap-5">
                    <button  onClick={() => handleMenu()} >
                        <RiMenu5Line/>
                    </button>
                    <Link to="/">
                        <button className="flex">
                            <RiMovieFill size={30}/>
                            <div className="text-xl">
                                WatchTube
                            </div>
                        </button>
                    </Link>
                </div>
                <div className="flex gap-5">
                    <div>
                        <input type="search" className="w-72 h-10 rounded-3xl border-2 px-5" placeholder="Search..." name="search"
                        value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} 
                        onFocus={() => setShowSuggetions(true)}
                        onBlur={() => setTimeout(() => setShowSuggetions(false), 100)}/>
                        {showSuggetions && (
                            <div className='fixed bg-white py-1 px-2 rounded-lg w-[18rem]'>
                                <ul>
                                {suggetions.map((suggetion) => 
                                    <li key={suggetion} className="py-2 px-3 shadow-sm cursor-pointer hover:bg-gray-100" onClick={() => {
                                        setSearchQuery(suggetion)
                                    }}>{suggetion}</li>
                                )}
                                </ul>
                            </div>
                        )}
                    </div>
                    <button>
                        <RiSearchLine/>
                    </button>
                    <button>
                        <RiMicFill/>
                    </button>
                </div>
                <div className="flex gap-5">
                    <button>
                        <RiVideoUploadFill/>
                    </button>
                    <button>
                        <RiNotification3Fill/>
                    </button>
                    <button>
                        <RiAccountCircleFill size={30}/>
                    </button>

                </div>
            </div>
    )
}

export default Head;
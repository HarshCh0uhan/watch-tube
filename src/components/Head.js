import { RiAccountCircleFill, RiMenu5Line, RiMicFill, RiMovieFill, RiNotification3Fill, RiSearchLine, RiVideoUploadFill } from "@remixicon/react";
import {toggleMenu} from "../utils/appSlice";
import { useDispatch } from "react-redux";

const Head = () => {
    
    const dispatch = useDispatch();

    const handleMenu = () => {
        dispatch(toggleMenu())
    }

    return (
        <div className="grid grid-flow-col justify-between h-[70px] pl-10 pr-10 m-auto shadow-lg items-center">
            <div className="flex gap-5">
                <button  onClick={() => handleMenu()} >
                    <RiMenu5Line/>
                </button>
                <button className="flex">
                    <RiMovieFill size={30}/>
                    <div className="text-xl">
                        WatchTube
                    </div>
                </button>
            </div>
            <div className="flex gap-5">
                <input type="text" className="w-72 h-9 rounded-3xl border-2"/>
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
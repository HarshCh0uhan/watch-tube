import React, { useEffect } from 'react'
import { useDispatch } from "react-redux";
import {closeMenu} from "../utils/appSlice";
import { useSearchParams } from 'react-router-dom';

const WatchPages = () => {

  const [searchParams] = useSearchParams();

  const dispatch = useDispatch();

  useEffect(() => {
    console.log("Menu Closed");
    dispatch(closeMenu())

  })

  return (
    <div className='m-10'>
      <iframe width="900" height="480" src={"https://www.youtube.com/embed/" + searchParams.get("v")} 
      title="YouTube video player" frameBorder="0" 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
      referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
    </div>
  )
}

export default WatchPages
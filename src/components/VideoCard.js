import React from 'react'

const VideoCard = ({info}) => {
  
    // console.log(info);

    const {snippet, statistics} = info
    const {thumbnails, title, channelTitle} = snippet

    return (
    <div className='p-3 m-5 w-72 hover:shadow-lg cursor-pointer rounded-lg'>
        <img className='rounded-lg' src={thumbnails.medium.url} alt='thumbnail' />
        <ul>
            <li className='font-bold'>{title}</li>
            <li>{channelTitle}</li>
            <li>{statistics.viewCount} Views</li>
        </ul>
    </div>
  )
}

export default VideoCard
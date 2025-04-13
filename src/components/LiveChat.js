import React, { useEffect, useState } from 'react'
import ChatMessage from './ChatMessage'
import { useDispatch, useSelector } from 'react-redux'
import { addMessages } from '../utils/chatSlice';
import { generateRandomName, makeRandomMessage } from '../utils/helper';
import { RiSendPlane2Line } from '@remixicon/react';

const LiveChat = () => {

    const [liveMessage, setLiveMessage] = useState("");
    const dispatch = useDispatch();
    const messageInfo = useSelector(store => store.chat.messages) 

    useEffect(() => {
        // APi Polling
        const interval = setInterval(() => {
            dispatch(addMessages({
                name: generateRandomName(),
                message: makeRandomMessage(10)
            }))
        }, 1000)

        return () => clearInterval(interval);
    }, [dispatch])

  return (
    <div className='bg-gray-100 w-full h-[580px] rounded-lg p-3 mb-5 overflow-y-scroll flex flex-col-reverse'>
        <form className=' flex font-semibold mt-3 gap-5 mx-2' onSubmit={(e) => {
            e.preventDefault();

            dispatch(addMessages({
                name: "Harsh",
                message: liveMessage
            }))
            setLiveMessage("");
        }}>
            <input className='border-2 border-gray-300 rounded-full w-full px-2' type='text' placeholder='Chat...'
            value={liveMessage}
            onChange={(e) => {
                setLiveMessage(e.target.value)
            }}/>
            <RiSendPlane2Line className='items-center cursor-pointer'/>
        </form>
        {
            messageInfo.map((message) => (
                <ChatMessage name={message.name} message={message.message}/> 
            ))
        }
    </div>
  )
}

export default LiveChat
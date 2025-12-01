import React from 'react'

const ChatMessage = ({name, message}) => {
  return (
    <div>
        <div className='flex items-center border-b border-b-gray-300 p-2'>
            <img
            className="w-7 h-7"
            alt="user"
            src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
            />
            <span className='font-semibold px-2'>{name}</span>
            <span className='font-extralight'>{message}</span>
        </div>
    </div>
  )
}

export default ChatMessage
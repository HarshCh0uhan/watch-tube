import React from 'react'

const Button = ({data}) => {
  return (
    <div>
        <button className='px-5 py-2 m-4 bg-gray-100 rounded-lg whitespace-nowrap'>{data}</button>
    </div>
  )
}

export default Button
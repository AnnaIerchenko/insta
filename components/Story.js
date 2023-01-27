import React from 'react'

const Story = ({userName, avatar}) => {
  return (
    <div>
      <img 
        src={avatar} 
        alt={userName} 
        className="rounded-full p-[1.5px] border-[3px] border-red-500"/>
      <p className='text-xs w-[60px] truncate text-center'>{userName}</p>
    </div>
  )
}

export default Story
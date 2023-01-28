import { faker } from '@faker-js/faker'
import React, { useEffect, useState } from 'react'

const Suggestions = () => {
  const [suggestions, setSuggestions] = useState([])

  useEffect(() => {
    setSuggestions([...Array(5)].map((profile) => ({
      userId: faker.datatype.uuid(),
      userName: faker.internet.userName(),
      avatar: faker.image.avatar(),
    }))
    )
  }, [])

  return (
    <div className='mt-4'>
      <div className='flex items-center justify-between'>
        <p className='text-sx font-semibold text-gray-400 mt-1'>Suggestions for you</p>
        <button className='font-semibold text-xs'>See all</button>
      </div>
      {
        suggestions.map((profile) => (
          <div className='flex items-center justify-between mt-5'>
            <div className='flex items-center mt-5'>
            <div className='w-8 h-8'>
              <img src={profile.avatar} alt="" className='rounded-full'/>
            </div>
            <div className='ml-4'>
              <p className='text-sm font-semibold'>{profile.userName}</p>
              <p className='text-xs text-gray-500'>Suggested for you</p>
            </div>
            </div>
            <button className='text-xs font-semibold text-[#00095f6]'>Follow</button>
          </div>
        ))
      }
      <div className='flex flex-wrap text-xs mt-6 text-semibold text-[#d2d2d2] space-x-1'>
        <p>About</p>
        <span>&#183;</span>
        <p>Help</p>
        <span>&#183;</span>
        <p>Press</p>
        <span>&#183;</span>
        <p>API</p>
        <span>&#183;</span>
        <p>Jobs</p>
        <span>&#183;</span>
        <p>Privacy</p>
        <span>&#183;</span>
        <p>Terms</p>
        <span>&#183;</span>
        <p>Locations</p>
        <span>&#183;</span>
        <p>Language</p>
       
      </div>

      <div className='text-xs mt-6 text-semibold text-[#d2d2d2]'>
        <p>@ 2022 INSTAGRAM FROM META</p>
      </div>
    </div>
  )
}

export default Suggestions
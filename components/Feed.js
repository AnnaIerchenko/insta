import React from 'react'
import MiniProfile from './MiniProfile'
import Posts from './Posts'
import Stories from './Stories'
import Suggestions from './Suggestions'

const Feed = () => {
  return (
    <div className='flex max-w-[790px] mx-auto lg:max-w-[854px] mt-4'>
      <section className='max-w-[470px] mx-auto w-[100vw]'>
        {/* stories */}
        <Stories />
        {/* posts */}
        <Posts />
      </section>
      <section className='max-w-[320px] w-full mx-8 hidden lg:block'>
        {/* miniProfile */}
        <MiniProfile />
        {/* suggestions */}
        <Suggestions />
      </section>
    </div>
  )
}

export default Feed

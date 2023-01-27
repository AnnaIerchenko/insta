import React from 'react'
import profile from "@/assets/profile.jpg"
import Post from './Post'

const Posts = () => {
  const posts = [{
    id: '123',
    userName: "Joe Doe",
    profilePic: profile,
    postPhoto: profile,
    caption: "Hello from the caption",
  },
  {
    id: '234',
    userName: "Mike Doe",
    profilePic: profile,
    postPhoto: profile,
    caption: "Second Hello from the caption",
 
  }
]

  return (
    <div className='mt-1 mx-1'>
      {
        posts.map((post) => (
          <Post 
            key={post.id}
            userName={post.userName}
            profilePic={post.profilePic}
            postPhoto={post.postPhoto}
            caption={post.caption}
          />
        ))
      }
    </div>
  )
}

export default Posts
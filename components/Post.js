import React from 'react'
import Image from 'next/image'
import dots from "@/assets/dots.png"
import comment from "@/assets/comment.png"
import message from "@/assets/message.png"
import save from "@/assets/save.png"
import hearth from "@/assets/hearth.png"
import emojy from "@/assets/emojy.png"
const Post = ({ 
  userName, 
  profilePic, 
  postPhoto, 
  caption}) => {

    const comments =[{
      userName: "Jon Doe",
      comment: "Hello from the comment section"
    },
  {
    userName: "Mike Doe",
    comment: "Second Hello from the comment section"
  }]

  return (
    <div>
      <div className='border rounded-lg my-3'>
      {/* header */}
      <div className='flex items-center p-3'>
        <div className='flex items-center w-full'>
          <div className='h-8 w-8 mr-3'>
            <img src={profilePic.src} alt={userName} className="rounded-full"/>
          </div>
          <div>
            <p className='font-semibold text-sm'>{userName}</p>
            <p className='text-sm h-6 w-6'>Original Audio</p>
          </div>
          </div>
        <div>
          <Image src={dots}/>
        </div>
      </div>

      {/* photo */}
      <div>
        <img src={postPhoto.src} alt="post" />
      </div>

      <div className='m-3'>
      {/* buttons */}
      <div>
      <div className='flex justify-between'>
        <div className='flex space-x-4'>
        <div className='Btn'>
          <Image src={hearth}/>
        </div>
        <div className='Btn'>
          <Image src={comment}/>
        </div>
        <div className='Btn'>
          <Image src={message}/>
        </div>
        </div>
        <div className='Btn'>
          <Image src={save}/>
        </div>
        </div>
        <div className='mt-2 customfont'>
          <p>20,572 likes</p>
        </div>
      </div>
      {/* caption */}
      <div className='flex items-center mt-2 '> 
        <p className='customfont mr-2 whitespace-nowrap'>{userName}</p>
        <p className='truncate '>{caption}</p>
      </div>
      {/* view all comments */}
      <p className='text-sm text-gray-500 mt-1 my-2'>View all 327 comments</p>
      {/* comments */}
      <div>
        {comments.map((comment) => (
          <div className='max-w-24 overflow-y-auto flex justify-between'>
            <div className='flex items-center truncate'>
              <p className='customfont mr-2'>{comment.userName}</p>
              <p className='truncate mr-2'>{comment.comment}</p>
            </div>
            <div className='h-3 w-3 shrink-0'>
              <Image src={hearth}/>
            </div>
          </div>
        ))}
      </div>
      {/* timestamp */}
      <p className='text-gray-400 text-xs my-2'>4 minutes ago</p>
      {/* border */}
      <div className='border-t -mx-3 my-3'></div>
      {/* input */}
        <div className='flex justify-between p-1'>
          <div className='flex'>
            <div className='Btn mr-4'>
              <Image src={emojy}/>
            </div>
            <input 
              type="text"
              placeholder="Add a comment..."
              className='outline-none'
            />
          </div>
          <button className='font-bold text-sm text-[#0095f6]'>Post</button>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Post
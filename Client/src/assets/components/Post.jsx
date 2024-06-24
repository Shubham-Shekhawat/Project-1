import React from 'react'
import '../../App.css'

const Post = () => {
  return (
    <div className='post'>
        <img src="https://plus.unsplash.com/premium_photo-1686741733157-1d7863a7a04e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        <div className="text">
          <h1 className='title'>Title</h1>
          <p className='info'>
            <a className="author">Author</a>
            <time datetime="">2024:05:06</time>
          </p>
          <p className='summary'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, neque atque nihil ratione vitae eum nam ea eaque cupiditate illo, aliquam nemo, porro earum exercitationem sint cum quasi omnis. Ipsum?</p>
        </div>
        
      </div>
  )
}

export default Post
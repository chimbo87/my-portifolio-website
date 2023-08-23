import React from 'react'
import  { useState } from 'react';
import axios from 'axios';

function Likes(blogs) {
    const [likes, setLikes] = useState(blogs.likes);
    const [isLiked, setIsLiked] = useState(false);
  
    const handleLike = async () => {
      if (!isLiked) {
        try {
          const response = await axios.post(`http://localhost:8000/blogs/likes${blogs._id}`);
          setLikes(response.data.likes);
          setIsLiked(true);
          console.log(response)
        } catch (error) {
          console.error('Error liking post:', error);
        }
      }
    };
  
    return (
      <div className="post">
        {/* <h2>{blog.title}</h2>
        <p>{blog.content}</p> */}
        <button onClick={handleLike} disabled={isLiked}>
          {isLiked ? 'Liked' : 'Like'}
        </button>
        <p>Likes: {likes}</p>
      </div>
    );
}

export default Likes
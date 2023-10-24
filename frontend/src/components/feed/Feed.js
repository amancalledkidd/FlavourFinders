import React, { useEffect, useState } from 'react';
import Navbar from '../navbar/Navbar'
import Post from '../post/Post'
import Home from '../Home/home.js';

const Feed = ({ navigate }) => {
  const [posts, setPosts] = useState([]);
  const [token, setToken] = useState(window.localStorage.getItem("token"));

  useEffect(() => {
    if(token) {
      fetch("/posts", {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })
        .then(response => response.json())
        .then(async data => {
          window.localStorage.setItem("token", data.token)
          setToken(window.localStorage.getItem("token"))
          setPosts(data.posts);
        })
    }
  }, [])
  
  
    if(token) {
      return(
        <>
          <Navbar currentPage="feed" /> 
          <h2>Posts</h2>
          <div id='feed' role="feed">
              {posts.map(
                (post) => ( <Post post={ post } key={ post._id } /> )
              )}
          </div>
        </>
      )
    } 
    else {
      navigate('/login')
    }
}

export default Feed;

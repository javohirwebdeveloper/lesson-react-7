// App.js

import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import Sidebar from './Sidebar';
import Post from './Post';
import './App.css';
import home from './pictures/Home/Selected.png';
import explore from './pictures/Explore/Default.png';
import notification from './pictures/Notifications/Default.png';
import message from './pictures/Messages/Default.png';
import list from './pictures/Lists/Default.png';
import bookmark from './pictures/Bookmarks/Default.png';
import profile from './pictures/Profile/Default.png';
import more from './pictures/More/Default.png';
const App = () => {
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState('');
  const [likedPosts, setLikedPosts] = useState([]);
  const [retweetedPosts, setRetweetedPosts] = useState([]);

  useEffect(() => {
    const storedPosts = JSON.parse(localStorage.getItem('posts')) || [];
    setPosts(storedPosts);

    const storedLikedPosts = JSON.parse(localStorage.getItem('likedPosts')) || [];
    setLikedPosts(storedLikedPosts);

    const storedRetweetedPosts = JSON.parse(localStorage.getItem('retweetedPosts')) || [];
    setRetweetedPosts(storedRetweetedPosts);
  }, []);

  const handlePostSubmit = () => {
    const newPosts = [...posts, { id: posts.length + 1, text: newPost }];
    setPosts(newPosts);
    setNewPost('');

    localStorage.setItem('posts', JSON.stringify(newPosts));
  };

  const handleLike = (postId) => {
    const updatedLikedPosts = likedPosts.includes(postId)
      ? likedPosts.filter((id) => id !== postId)
      : [...likedPosts, postId];

    setLikedPosts(updatedLikedPosts);

    localStorage.setItem('likedPosts', JSON.stringify(updatedLikedPosts));
  };

  const handleRetweet = (postId) => {
    const updatedRetweetedPosts = retweetedPosts.includes(postId)
      ? retweetedPosts.filter((id) => id !== postId)
      : [...retweetedPosts, postId];

    setRetweetedPosts(updatedRetweetedPosts);

    localStorage.setItem('retweetedPosts', JSON.stringify(updatedRetweetedPosts));
  };
  
  const handleDelete = (postId) => {
    const updatedPosts = posts.filter((post) => post.id !== postId);
    setPosts(updatedPosts);

    const updatedLikedPosts = likedPosts.filter((id) => id !== postId);
    setLikedPosts(updatedLikedPosts);

    const updatedRetweetedPosts = retweetedPosts.filter((id) => id !== postId);
    setRetweetedPosts(updatedRetweetedPosts);

    localStorage.setItem('posts', JSON.stringify(updatedPosts));
    localStorage.setItem('likedPosts', JSON.stringify(updatedLikedPosts));
    localStorage.setItem('retweetedPosts', JSON.stringify(updatedRetweetedPosts));
  };

  return (
    <div className="app">
       <Container>
      <div className="navbar">
      
       
        <div className="navbar-buttons">
           <div className='navbar-button'>
             <img className='logonav' src='https://img.freepik.com/free-vector/new-2023-twitter-logo-x-icon-design_1017-45418.jpg?w=826&t=st=1701691668~exp=1701692268~hmac=5a764893dc8098ee3ca02f7fac7f07af257294bc45d30e9af0072092e8f90dd9'></img>
             <div> <img src={home} alt="home"/> HOME</div>
             <div><img src={explore} alt="explore"/>EXPLORE</div>
             <div><img src={notification} alt="home"/>NOTIFICATIONS</div>
             <div> <img src={message} alt="home"/>MESSAGES</div>
             <div><img src={list} alt="home"/>LISTS</div>
             <div>  <img src={bookmark} alt="home"/>BOOKMARKS</div>
             <div> <img src={profile} alt="home"/>PROFILE</div>
             <div>  <img src={more} alt="home"/>MORE</div>
           </div>
          </div>
      
      </div>
     <div className='sidebar-post'>
        <div className="sidebar">
          <Sidebar />
        </div>
        <div className="main">
          <div className="post-form">
            <textarea
              placeholder="What's happening?"
              value={newPost}
              onChange={(e) => setNewPost(e.target.value)}
            />
            <button onClick={handlePostSubmit} className='tweetbutton'>Tweet</button>
          </div>
          <div className="posts">
          {posts.map((post) => (
            <Post
              key={post.id}
              id={post.id}
              text={post.text}
              onLike={handleLike}
              onRetweet={handleRetweet}
              onDelete={handleDelete}
              isLiked={likedPosts.includes(post.id)}
              isRetweeted={retweetedPosts.includes(post.id)}
            />
          ))}
        </div>
          </div>
        </div>
      </Container>
      
    </div>
  );
};

export default App;

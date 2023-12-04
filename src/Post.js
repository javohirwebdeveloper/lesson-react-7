// Post.js

import React, { useState } from 'react';

const Post = ({ id, text, onLike, onRetweet, onDelete, isLiked, isRetweeted }) => {
  const [likeActive, setLikeActive] = useState(isLiked);
  const [retweetActive, setRetweetActive] = useState(isRetweeted);

  const handleLike = () => {
    onLike(id);
    setLikeActive(!likeActive);
  };

  const handleRetweet = () => {
    onRetweet(id);
    setRetweetActive(!retweetActive);
  };

  const handleDelete = () => {
    onDelete(id);
  };

  return (
    <div className="post">
      <p>{text}</p>
      <div className="post-buttons">
        <button className={`like ${likeActive ? 'active' : ''}`} onClick={handleLike}>
          {likeActive ? '❤️' : '🤍'}
        </button>
        <button className={`retweet ${retweetActive ? 'active' : ''}`} onClick={handleRetweet}>
          {retweetActive ? '🔁' : '🔄'}
        </button>
        <button className="delete" onClick={handleDelete}>
          🗑️
        </button>
      </div>
    </div>
  );
};

export default Post;

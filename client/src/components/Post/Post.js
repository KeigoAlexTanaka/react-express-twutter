import React from 'react';
import './Post.css';

const Post = props => {
  let { content, user, retweets } = props.tweet;
  return (
    <div className="Post">
      <p>{content}</p>
      <h3>@{user}</h3>
      <h4>{retweets} 
        <i className="fas fa-retweet"></i>
      </h4>
    </div>
  )
};

export default Post;

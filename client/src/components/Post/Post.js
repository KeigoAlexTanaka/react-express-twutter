import React from 'react';
import './Post.css';

const Post = props => {
  let { content, user, retweets, id } = props.tweet;
  return (
    <div className="Post">
      <p>{content}</p>
      <h3>@{user}</h3>
      <h4>{retweets} 
        <i className="fas fa-retweet"></i>
      </h4>
      <button onClick={e => props.handleDelete(e, id)}>DELETE</button>
    </div>
  )
};

export default Post;

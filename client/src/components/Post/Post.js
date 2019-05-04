import React from 'react';
import './Post.css';

const Post = props => {
  let { content, user, retweets } = props.tweet;
  return (
    <div>
      <p>{content}</p>
      <h3>@{user}</h3>
      <h4>{retweets}</h4>
    </div>
  )
};

export default Post;

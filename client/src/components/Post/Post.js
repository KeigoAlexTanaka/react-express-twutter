import React from 'react';

const Post = props => {
  return (
    <div>
      <p>{props.content}</p>
      <h3>{props.user}</h3>
      <h4>{props.retweets}</h4>
    </div>
  )
};

export default Post;

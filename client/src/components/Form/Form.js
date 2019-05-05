import React from 'react';

const Form = props => {
  return (
    <form onSubmit={e => props.postTweet(e)}>
      <label htmlFor="content">Content: </label>
      <input onChange={e => props.handleChange(e)}
        type="text"
        name="content"/>
      <label htmlFor="user">User: </label>
      <input onChange={e => props.handleChange(e)}
        type="text"
        name="user"/>
      <label htmlFor="retweets">Retweets: </label>
      <input onChange={e => props.handleChange(e)}
        type="number"
        name="retweets"/>
      <button type="submit">Submit</button>
    </form>
  )
}

export default Form;

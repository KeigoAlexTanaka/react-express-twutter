import React from 'react';

const Form = props => {
  return (
    <form>
      <label htmlFor="content">Content: </label>
      <input type="text" name="content"/>
      <label htmlFor="user">User: </label>
      <input type="text" name="user"/>
      <label htmlFor="retweets">Retweets: </label>
      <input type="text" name="retweets"/>
    </form>
  )
}

export default Form;

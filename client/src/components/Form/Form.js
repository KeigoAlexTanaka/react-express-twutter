import React from 'react';

const Form = props => {
  return (
    <form onSubmit={() => props.setDone(true)}>
      <label htmlFor="content">Content: </label>
      <input onChange={e => props.setForm({...props.form, [e.target.name]: e.target.value})}
        type="text"
        name="content"/>
      <label htmlFor="user">User: </label>
      <input onChange={e => props.setForm({...props.form, [e.target.name]: e.target.value})}
        type="text"
        name="user"/>
      <label htmlFor="retweets">Retweets: </label>
      <input onChange={e => props.setForm({...props.form, [e.target.name]: e.target.value})}
        type="number"
        name="retweets"/>
      <button type="submit" onClick={e => e.preventDefault()}>Submit</button>
    </form>
  )
}

export default Form;

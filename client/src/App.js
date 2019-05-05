import React from 'react';
import axios from 'axios';
import Form from './components/Form/Form';
import Post from './components/Post/Post';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      tweets: [],
      form: { // a nested form variable to keep separate
        content: null,
        user: null,
        retweets: null
      }
    }
  }

  handleChange = async e => {
    let { name, value } = e.target;
    // a way of dealing with nested state
    this.setState(state => ({
      ...state, 
        'form': {
          ...state.form, [name]: value
        }
    }))
  }

  postTweet = async e => {
    e.preventDefault();
    let { form } = this.state;
    await axios.post('http://localhost:3001/tweets', form);
    await this.getTweets();
  }

  getTweets = async () => {
    const tweetData = await axios.get('http://localhost:3001/tweets');
    const tweets = tweetData.data;
    this.setState({tweets});
  }

  componentDidMount = () => {
    this.getTweets();
  }

  render() {
    let { form, tweets } = this.state;
    return (
      <div className="App">
        <h1>Twutter</h1>
        <Form
          form={form}
          handleChange={this.handleChange}
          postTweet={this.postTweet}
        />
        { tweets.map((tweet, key) => {
            return <Post key={key} tweet={tweet}/>
        })
        }
       </div>
    );
  }
}

export default App;

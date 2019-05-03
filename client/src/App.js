import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Post from './components/Post/Post';
import './App.css';

function App() {
  const [tweets, setTweets] = useState([]);
  // using hooks
  useEffect(() => { // you can't put an async function in a hook
    const fetchData = async () => {
      // this link won't work until you set up your server
      const tweetData = await axios.get('http://localhost:3001/tweets');
      if (tweetData.data) setTweets(tweetData.data);
    }
    fetchData();
  }, []);

  return (
    <div className="App">
      { tweets.map((tweet, key) => (<Post key={key} tweet={tweet}/>)) }
    </div>
  );
}

export default App;

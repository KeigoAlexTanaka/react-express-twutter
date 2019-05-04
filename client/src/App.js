import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Form from './components/Form/Form';
import Post from './components/Post/Post';
import './App.css';

function App() {
  // using useState with hooks
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
      <h1>Twutter</h1>
      <Form />
      { tweets.map((tweet, key) => {
          return (
            <Post 
              key={key}
              tweet={tweet}
            />
          )
        })
      }
     </div>
  );
}

export default App;

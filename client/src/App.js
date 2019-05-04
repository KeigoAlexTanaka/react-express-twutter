import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Form from './components/Form/Form';
import Post from './components/Post/Post';
import './App.css';

function App() {
  // using useState with hooks
  const [tweets, setTweets] = useState([]);
  const [form, setForm] = useState({
    content: null,
    user: null,
    retweets: null
  });
  const [done, setDone] = useState(false);
  // using hooks
  useEffect(() => { // you can't put an async function in a hook
    const fetchData = async () => {
      // this link won't work until you set up your server
      const tweetData = await axios.get('http://localhost:3001/tweets');
      if (tweetData.data) setTweets(tweetData.data);
    }
    fetchData();

    const postData = async () => {
      await axios.post('http://localhost:3001/tweets', form);
      setForm({ content: null, user: null, retweets: null });
    }
    console.log(done);
    if (done) postData();
  }, [form, done]);

  return (
    <div className="App">
      <h1>Twutter</h1>
      <Form
        form={form}
        done={done}
        setForm={setForm}
        setDone={setDone}
      />
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

import React, { useState, useEffect } from 'react';
import './App.css';
import axios from "axios";
import CardList from "./Components/CardList";

const App = () => {
  const [story, setStory] = useState([]);

  useEffect(() => {
    axios.get('https://refu-stories-api.herokuapp.com/stories')
        .then(res => {
          setStory(res.data);
        })
        .catch(err => console.log('Error: ', err))
  }, []);

  console.log(story);

  return (
      <div className="App">
        <CardList cuento={story} />
      </div>
  );
};

export default App;
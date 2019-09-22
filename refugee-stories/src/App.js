import React, { useState, useEffect } from 'react';
import './App.css';
import axios from "axios";
import CardList from "./Components/CardList";

const App = () => {
  const [story, setStory] = useState([]);

  useEffect(() => {
    axios.get('https://refu-stories-api.herokuapp.com/stories')
        .then(res => {
          console.log(res.data);
        })
        .catch(err => console.log('Error: ', err))
  }, []);

  return (
      <div className="App">
        hello
      </div>
  );
};

export default App;
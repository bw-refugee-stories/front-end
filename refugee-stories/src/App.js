import React, { useState, useEffect } from 'react';
import './App.css';
import { Route, Switch, Link } from 'react-router-dom';
import axios from "axios"
import Home from './components/Home/Home';
import SubmitStory from './components/SubmitStory/SubmitStory';
import LoginForm from './components/LoginForm';
import CardList from './components/Stories/CardList';
import Connect from './components/Connect/Connect';
import TabNav from './components/TabNav/TabNav';


function App() {
  const [story, setStory] = useState([]);

  useEffect(() => {
    axios.get('https://refu-stories-api.herokuapp.com/stories')
        .then(res => {
          setStory(res.data);
        })
        .catch(err => console.log('Error: ', err))
  }, []);

  return (
    <div className="App">
      <section className='app-header'>
          <h1>Refugee Stories</h1>
    <Switch>
      <Route exact path='/' render={props => <TabNav {...props}/>} />
      <Route path='/submitstory' render={props => <SubmitStory {...props}/>} />
      <Route path='/admin' render={props => <LoginForm {...props}/>} />
      <Route path='/pending' render={props => <CardList {...props} data={story}/>} />
      <Route path='/connect' render={props => <Connect {...props}/>} />
    </Switch>
      </section>
    </div>
  );
}

export default App;

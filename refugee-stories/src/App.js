import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
// import Home from './components/Home/Home';
import SubmitStory from './components/SubmitStory/SubmitStory';
import LoginForm from './components/LoginForm';
import CardList from './components/Stories/CardList';
import Connect from './components/Connect/Connect';
import TabNav from './components/TabNav/TabNav';


function App() {

  

  return (
    <div className="App">
      <section className='app-header'>
          <h1>Refugee Stories</h1>
    <Switch>
      <Route exact path='/' render={props => <TabNav {...props}/>} />
      <Route path='/submitstory' render={props => <SubmitStory {...props}/>} />
      <Route path='/admin' render={props => <LoginForm {...props}/>} />
      <Route path='/pending' render={props => <CardList {...props}/>} />
      <Route path='/connect' render={props => <Connect {...props}/>} />
    </Switch>
      </section>
    </div>
  );
}

export default App;

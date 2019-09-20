import React from 'react';
import './App.css';
// import { Route, Switch, Link } from 'react-router-dom';
// import Home from './components/Home/Home';
// import SubmitStory from './components/SubmitStory/SubmitStory';
import TabNav from './components/TabNav/TabNav';


function App() {
  return (
    <div className="App">
      <section className='app-header'>
          <h1>Refugee Stories</h1>
      <TabNav />
    {/* <Switch>
      <Route exact path='/' render={props => <Home {...props}/>} />
      <Route path='/submitstory' render={props => <SubmitStory {...props}/>} />
    </Switch> */}
      </section>
    </div>
  );
}

export default App;

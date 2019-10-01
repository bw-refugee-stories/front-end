import React from "react";
import SubmitStory from '../SubmitStory/SubmitStory';
import Home from '../Home/Home';
import { Tab } from "semantic-ui-react";
import LoginForm from '../LoginForm/LoginForm';
import UserForm from '../UserForm/UserForm';
// import CardList from '../Stories/CardList';
import MapContainer from '../Connect/Connect';
import { Link } from "react-router-dom";
import Map from '../GoogleMaps/GoogleMaps';
import { withScriptjs, withGoogleMap } from 'react-google-maps';
import { api_key } from '../../data/data';


const WrappedMap = withScriptjs (withGoogleMap(Map));


    const panes = [
        {
          menuItem: 'Home', render: () => <Home>
            <Link to="/">TabNav</Link>
            <h1 className="main-title">Voices of Refugees</h1>
          </Home>
        },
        {
          menuItem: 'Submit Your Story',
          render: () =>
          <SubmitStory attached={false}>
          <Link to="/submitstory">Submit Story</Link>
          Submit Your Story</SubmitStory>,
        },
        {
          menuItem: 'Admin Login',
          render: () =>
          <LoginForm attached={false}>
          <Link to="/admin">Submit Story</Link>
          Admin Login</LoginForm>

        },

        {
          menuItem: 'Register',
          render: () =>
          <UserForm attached={false}>
          <Link to="/userform">User Registration</Link>
          User Registration</UserForm>
        },
        {
          menuItem: 'Connect',
          render: () => 
          <MapContainer attached={false}>
          <Link to="/connect">Connect</Link>
          Connect Content</MapContainer>,
      },
         {
           menuItem: 'Google Maps',
           render: () => 
           <div style={{width:'100%', height: '100vh'}}>
            <WrappedMap 
              googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${api_key}`}
              loadingElement={<div style={{height: '100%' }} />}
              containerElement={<div style={{height:'100%' }} />}
              mapElement={<div style={{height: '100%' }} />}
              attached={false}>Tab 3 Content</WrappedMap>
           </div>
         },
      ]

    const TabNav = () => <Tab menu={{ pointing: true }} panes={panes} />

   export default TabNav
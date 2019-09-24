import React from 'react';
import SubmitStory from '../SubmitStory/SubmitStory';
import Home from '../Home/Home';
import MapContainer from '../Connect/Connect';
import { Tab } from "semantic-ui-react";
// import { NavLink } from "react-router-dom";



    const panes = [
        {
          menuItem: 'Home',
          render: () => <Home attached={false}>Home</Home>,
        },
        {
          menuItem: 'Submit Your Story',
          render: () => 
          <SubmitStory attached={false}>Submit Your Story</SubmitStory>,
        },
        {
          menuItem: 'Connect',
          render: () => 
          <MapContainer attached={false}>Connect Content</MapContainer>,
        },
      ]

    const TabNav = () => <Tab menu={{ pointing: true }} panes={panes} />

   export default TabNav
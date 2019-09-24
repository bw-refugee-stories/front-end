import React from "react";
import SubmitStory from '../SubmitStory/SubmitStory';
import Home from '../Home/Home';
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
        // {
        //   menuItem: 'Tab 3',
        //   render: () => <Tab.Pane attached={false}>Tab 3 Content</Tab.Pane>,
        // },
      ]

    const TabNav = () => <Tab menu={{ pointing: true }} panes={panes} />

   export default TabNav
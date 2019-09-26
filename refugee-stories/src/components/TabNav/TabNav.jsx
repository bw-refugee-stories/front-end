import React from "react";
import SubmitStory from '../SubmitStory/SubmitStory';
import Home from '../Home/Home';
import { Tab } from "semantic-ui-react";
// import { NavLink } from "react-router-dom";
import CardList from "../Stories/CardList";



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
          menuItem: 'Stories',
          // render: () => <Tab.Pane attached={false}>Tab 3 Content</Tab.Pane>,
            render: () => <CardList attatched={false}>Stories</CardList>,
        },
      ];

    const TabNav = () => <Tab menu={{ pointing: true }} panes={panes} />

   export default TabNav
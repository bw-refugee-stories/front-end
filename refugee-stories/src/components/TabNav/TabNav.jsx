import React from "react";
import SubmitStory from '../SubmitStory/SubmitStory';
import Home from '../Home/Home';
// import CharacterList from './CharacterList.js';
// import EpisodeList from './EpisodeList.js';
import { Tab } from "semantic-ui-react";
// import { NavLink } from "react-router-dom";

// TODO: Add missing tabs below
// Take a look at React Semantic UI tabs 
// https://react.semantic-ui.com/modules/tab/
// const colors = [
//     'red',
//     'orange',
//     'yellow',
//     'olive',
//     'green',
//     'teal',
//     'blue',
//     'violet',
//     'purple',
//     'pink',
//     'brown',
//     'grey',
//   ]
  


    const panes = [
        {
          menuItem: 'Home',
          render: () => <Home attached={false}>Home</Home>,
        },
        {
          menuItem: 'Submit Your Story',
          render: () => <SubmitStory attached={false}>Submit Your Story</SubmitStory>,
        },
        // {
        //   menuItem: 'Tab 3',
        //   render: () => <Tab.Pane attached={false}>Tab 3 Content</Tab.Pane>,
        // },
      ]

    const TabNav = () => <Tab menu={{ pointing: true }} panes={panes} />

   export default TabNav
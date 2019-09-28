import React from "react";
import SubmitStory from '../SubmitStory/SubmitStory';
import Home from '../Home/Home';
import { Tab } from "semantic-ui-react";
import LoginForm from '../LoginForm';
import CardList from '../Stories/CardList';
import MapContainer from '../Connect/Connect';
import { Link } from "react-router-dom";



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

        // {
        //   menuItem: 'Stories Pending',
        //   render: () =>
        //   <CardList attached={false}>
        //   <Link to="/pending">Stories Pending</Link>
        //   Stories Pending</CardList>
        // },
        {
          menuItem: 'Connect',
          render: () => 
          <MapContainer attached={false}>
          <Link to="/connect">Connect</Link>
          Connect Content</MapContainer>,
      }

      
        //  {
        //    menuItem: 'Tab 3',
        //    render: () => <Tab.Pane attached={false}>Tab 3 Content</Tab.Pane>,
        //  },
      ]

    const TabNav = () => <Tab menu={{ pointing: true }} panes={panes} />

   export default TabNav
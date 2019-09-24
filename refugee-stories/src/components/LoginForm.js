import React from "react";
import './App.css';
import {Button, Icon, Card} from 'semantic-ui-react';


const LoginForm = () => (
  <div>
    <h1> Admin Login  </h1>

    <br></br>
    
    <div class="ui icon input">
      <input type="text" placeholder="Login" />
      <i aria-hidden="true" class="users icon"></i>
    </div>

    <br></br>
    <br></br>

    <div class="ui icon input">
      <input type="password" placeholder="Password" />
      <i aria-hidden="true" class="lock icon"></i>
    </div>


    <br></br>
    <br></br>
    
    
    <Button color='teal' animated>
      <Button.Content visible>Login</Button.Content>
      <Button.Content hidden>
        <Icon name='arrow right' />
      </Button.Content>
    </Button>
    
    
 
    
  </div>
);

export default LoginForm;

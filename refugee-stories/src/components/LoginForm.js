import React from "react";
import { Button, Icon } from 'semantic-ui-react';
import axios from 'axios';

   class LoginForm extends React.Component {

        constructor() {
          super()
          this.state = {
              username: '',
              password: '', 
          }
      }


      handleChanges = e => {
          this.setState({
              ...this.state,
              [e.target.name]: e.target.value
            });
      }

      submit = e => {
        e.preventDefault()
        const {username, password} = this.state
        axios.post('https://refu-stories-api.herokuapp.com/users/admin/login', {username, password})
        .then((res) => {
          localStorage.setItem('token', res.data.token)
          this.props.history.push("/pending")
        })
        .catch((err) => {
          console.log( 'err.response', err.response );          
        })
    }


    
      render (){ 
        const {username,password} = this.state
        return (<div>
          <h1> Admin Login  </h1>
  
          <br></br>
          <form onSubmit={this.submit}>
          <div className="ui icon input">
            <input type = 'text' name = 'username' placeholder = 'Username' value = {username} onChange = {this.handleChanges}  />
            <i aria-hidden="true" className="users icon"></i>
          </div>
  
          <br></br>
          <br></br>
  
          <div className="ui icon input">
            <input type = 'password' name = 'password' placeholder = 'Password' value = {password} onChange = {this.handleChanges} /> 
            <i aria-hidden="true" className="lock icon"></i>
          </div>
  
  
          <br></br>
          <br></br>
          
          
          <Button color='teal' animated type="submit" >
            <Button.Content visible>Login</Button.Content>
            <Button.Content hidden>
              <Icon name='arrow right' />
            </Button.Content>
            </Button>   
          </form>
          
        </div>
        )
      }
    };

export default LoginForm;

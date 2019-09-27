import React from "react";
import ReactDOM from 'react-dom';
import { Link } from 'react-router';
import {Button, Icon, Card} from 'semantic-ui-react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

   class LoginForm extends React.Component {
      

        constructor() {
          super()
          this.state = {
              username: '',
              password: '', redirect:false
          }
      }

      renderRedirect = () => {
        if (this.state.redirect) {
          return <Redirect to='/target' />
        }
      }



      login = (username, password) => {
          const user = {
            username,
            password
          }
          return axios.post('https://cors-anywhere.herokuapp.com/http://refu-stories-api.herokuapp.com/users/login', user)
            .then((res) => {
                localStorage.setItem('token', res.data.token)
                this.props.history.push('/stories')
              })

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
        this.login(username, password)
            .then(() => {
                this.props.history.push("/")
            })
            .catch((err) => {
                console.log(err)
            })
    }
    
      render (){ 
        const {username,password} = this.state
        return (<div>
          <h1> Admin Login  </h1>
  
          <br></br>
          
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
          
          
          <Button color='teal' animated onClick = {this.submit} >
            <Button.Content visible>Login</Button.Content>
            <Button.Content hidden>
              <Icon name='arrow right' />
            </Button.Content>
          </Button>
          
        </div>)
      }
    };

export default LoginForm;

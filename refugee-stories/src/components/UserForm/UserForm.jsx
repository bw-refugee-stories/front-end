import React from "react";
// import ReactDOM from 'react-dom';
import { withRouter } from 'react-router-dom';
// import { Link } from 'react-router';
import {Button, Icon } from 'semantic-ui-react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

   class UserForm extends React.Component {
      

        constructor() {
          super()
          this.state = {
              username: '',
              password: '', redirect:false,
              role: ''
          }
      }

      setRedirect = () => {
        this.setState({
          redirect: true
        })
      }

      renderRedirect = () => {
        if (this.state.redirect) {
          return <Redirect to='/' />
        }
      }



      register = (username, password, role) => {
          const user = {
            username,
            password,
            role
          }
          return axios.post('https://cors-anywhere.herokuapp.com/http://refu-stories-api.herokuapp.com/users/register', user)
            .then((res) => {
              console.log('token:', res.data.token)
                localStorage.setItem('token', res.data.token)
                this.renderRedirect()
               
              })

            }


      handleChanges = e => {
          this.setState({ ...this.state,[e.target.name]: e.target.value
            });
      }

      submit = e => {
        e.preventDefault()
        const {username, password, role} = this.state
        this.register(username, password, role)
            .then(() => {
                this.props.history.push("/")
            })
            .catch((err) => {
                console.log(err)
            })
    }


    
      render (){ 
        const {username,password,role} = this.state
            return (<div>
                <h1> User Registration </h1>
        
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

                <div className="ui icon input">
                    <input type = 'text' name = 'role' placeholder = 'Role' value = {role} onChange = {this.handleChanges} /> 
                    <i aria-hidden="true" className="user icon"></i>
                </div>
          
          
          <Button color='teal' animated onClick = {this.submit} >
            <Button.Content visible>Register</Button.Content>
            <Button.Content hidden>
              <Icon name='arrow right' />
            </Button.Content>
          </Button>
          </form>
        </div>
       )
      }
    };

    export default withRouter(UserForm);

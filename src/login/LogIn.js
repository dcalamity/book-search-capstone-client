import React, { Component } from 'react';
import ValidationError from '../validationError';
import TokenService from '../services/token-service';
import AuthApiService from '../services/auth-api-service';
import config from '../config';

class LogIn extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      userName: {
        value: ''
      },
      password: {
        value: ''
      },
      LogInUserID: 0,
      error: null,
     };
  }

  handleLoginSuccess = () => {
    window.location = '/user/dash'
  }

  changeUsername(userName) {
    this.setState({userName: {value: userName}});
  }

  changePassword(password) {
    this.setState({password: {value: password}});
  }

  componentDidMount() {
      console.log('Stateful component LogIn successfully mounted.');
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const { userName, password} = event.target

    AuthApiService.postLogin({
      userName: userName.value,
      password: password.value,
    })

    .then(response => {
      console.log(response)
      userName.value = ''
      password.value = ''
      TokenService.saveAuthToken(response.authToken)
      TokenService.saveUserId(response.userID)
      fetch(`${config.API_ENDPOINT}/met/interval`)
      window.location ='/user/dash'
    })
    .then(response => {
      console.log(response)
    })
    .catch(err => {
      console.log(err);
    });   
   }
          
  render() {

    return (
        <div className="App">
          <section>
            <div className="header">
              <div className="top-left">
                Logo
              </div>
              <div className="top-right">
                <a href="/">Sign up</a>
              </div>
            </div>
          </section>
          <section>
            <div className="log-in">
              <h2>Log in</h2>
              
              <form onSubmit={this.handleSubmit} className="input-pwd">
                <div className="input-user">
                  <label>Username</label>
                  <input type="text" name='userName' placeholder="Username" onChange={e => this.changeUsername(e.target.value)}/>
                  <label>Password</label>
                  <input type="Password" name='password' placeholder="Password" onChange={e => this.changePassword(e.target.value)}/>
                  <button className="s-button" type="submit">Sign In
                  </button>
                  <div>
                    <a href="/">Don't have an account yet? Create one here!</a>
                  </div>    
                  </div>

              </form>
              </div>
          </section>
      </div>
    );
  }
}

export default LogIn;

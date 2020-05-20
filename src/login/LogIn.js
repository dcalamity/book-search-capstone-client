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
    console.log('username:', userName.value, "password:" , password.value);
    AuthApiService.postLogin({
      userName: userName.value,
      password: password.value,
    })

    .then(response => {
      console.log("response ID", response)
      userName.value = ''
      password.value = ''
      TokenService.saveAuthToken(response.authToken)
      TokenService.saveUserId(response.userId)
      // fetch(`${config.API_ENDPOINT}/met/interval`)
      window.location ='/user/dash'
    })
    .then(response => {
      console.log("response:",response)
    })
    .catch(err => {
      console.log(err);
    });   
   }
          
  render() {

    return (
      <div className="App">
        <header className="header">
          <div>Logo</div>
          <nav>
            <a href="/">Sign Up</a>
          </nav>
        </header>
        <section>
          <main className="login">
            <form onSubmit={this.handleSubmit} className="input-lgn">
              <h2>Log In</h2>
              <label>Username</label>
              <input type="text" id='userName' name='userName' placeholder="Username" onChange={e => this.changeUsername(e.target.value)} />
              <label>Password</label>
              <input type="Password" id='password' name='password' placeholder="Password" onChange={e => this.changePassword(e.target.value)}/>
              <button className="s-button" type="submit">Sign In
              </button>
              <a href="/">Don't have an account yet? Create one here!</a>
            </form>
          </main>
        </section>
      </div>
    );
  }
}

export default LogIn;

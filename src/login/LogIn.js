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
      console.log(this.state)
      fetch(``)
        .then(response => {
          if (response.ok) {
              return response.json();
          }
          throw new Error(response.statusText);
        })
        .then(data => {
          console.log(data)
          //here we will have user sign up processing
          this.setState({
            LogInUserID: 55
          });
        })
       .catch(err => {
          console.log(err);
        });   
   }
          
          
          // this.setState({
          //   LogInUserID: [outputObject]
          // });
          // console.log(outputObject);
       

  render() {
      // const { name } = this.props;
      // const { isLiked } = this.state;

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
                  <input type="text" name='Username' placeholder="Username" onChange={e => this.changeUsername(e.target.value)}/>
                  <label>Password</label>
                  <input type="Password" name='Password' placeholder="Password" onChange={e => this.changePassword(e.target.value)}/>
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

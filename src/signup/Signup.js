import React, { Component } from 'react';
import ValidationError from '../validationError'
import AuthApiService from '../services/auth-api-service';

class Signup extends Component {

  constructor(props) {
      super(props);
      this.state = { 
        userName: {
          value: '',
          touched: false
      },
      password: {
        value: '',
        touched: false
       },
       repeatPassword: {
        value: '',
        touched: false
    },
        LogInUserID: 0
       };
  }

  componentDidMount() {
      console.log('Stateful component Sign Up successfully mounted.');
  }

  changeUsername(userName) {
    this.setState({
    userName: { value: userName, touched: true }
    });
  }

  changePassword(password) {
    this.setState({
    password: { value: password, touched: true }
    });
  }

  updateRepeatPassword(repeatPassword) {
    this.setState({ repeatPassword: { value: repeatPassword, touched: true } });
}

handleLoginSuccess = user => {
  window.location = '/user/dash'
}

  handleSubmit = (event) => {
    event.preventDefault()
    const { userName, password, repeatPassword } = event.target
    this.setState({ error: null })
    AuthApiService.postUser({
        user_name: userName.value,
        password: password.value,
    })
        .then(user => {
          console.log(user)
            userName.value = ''
            password.value = ''
            repeatPassword.value = ''
            this.handleLoginSuccess()
        })
        .catch(res => {
            this.setState({ error: res.error })
        })  
   }

    validateUserName() {
      const userName = this.state.userName.value.trim();
      if (userName.length === 0) {
          return <p className='input-error'>Username is required</p>;
      } else if (userName.length < 2) {
          return <p className='input-error'>Username must be at least 2 characters long</p>;
      }
   }

   validatePassword() {
    const password = this.state.password.value.trim();
    if (password.length === 0) {
        return <p className='input-error'>Password is required</p>;
    } else if (password.length < 6 || password.length > 72) {
        return <p className='input-error'>Password must be between 6 and 72 characters long</p>;
    } else if (!password.match(/[0-9]/)) {
        return <p className='input-error'>Password must contain at least one number</p>;
    }
  }


  render() {
      // const { name } = this.props;
      // const { LogInUserID } = this.state;
      // console.log(LogInUserID)

      return (
        <main className="landing">
        <header className="header">
          <div className="top-left">This is where the logo will be</div>
          <div className="top-right">
            <a href="/user/login">Log In</a>
          </div>
        </header>  
        <div className="middle">

          <div className="info">
            <h2>Description</h2>
          </div>

          <form className="sign-up" onSubmit={this.handleSubmit}>
            <h2>Sign Up</h2>

            <div className="input-user">
              <label htmlFor='username'>Username</label>
              <input type="text" name='userName' placeholder="Username" onChange={e => this.changeUsername(e.target.value)}/>
              {this.state.userName.touched && (<ValidationError message={this.validateUserName()} />)}
            </div>

            <div className="input-pwd">
              <label>Password</label>
              <input type="Password" name='password' placeholder="Password" onChange={e => this.changePassword(e.target.value)}/>
              {this.state.password.touched && (<ValidationError message={this.validatePassword()} />) }
            </div>

            <div className="input-pwd">
              <label>Repeat Password</label>
              <input type="Password" name='repeatPassword' placeholder="Repeat Password" onChange={e => this.updateRepeatPassword(e.target.value)}/>
              
            </div>
            <button className="s-button" type="submit">Sign Up</button>
            <div>
                <a href="/user/login">Already have an account? Log in here!</a>
              </div>
          </form>
        </div>
      </main> 
      );
  }
}

export default Signup;

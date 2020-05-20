import React, { Component } from 'react';
import ValidationError from '../validationError'
import AuthApiService from '../services/auth-api-service';
import TokenService from '../services/token-service.js';
import config from '../config';

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
        LogInUserID: 0,
        // submitButtonDisabled: 'disabled',
        submitButtonDisabled: ''
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

  validateRepeatPassword(){
    const repeatPassword = this.state.repeatPassword.value.trim();
    const password = this.state.password.value.trim();
    // this.setState({submitButtonDisabled: 'disabled'});
    if (repeatPassword != password) {
      return <p className='input-error'>Passwords do not match</p>;
    } 
    // else {
    //     this.setState({submitButtonDisabled: ''});
    // }
  }

  render() {
      // const { name } = this.props;
      // const { LogInUserID } = this.state;
      // console.log(LogInUserID)
    return (
      <div className="App">
        <header className="header">
          <div>This is where the logo will be</div>
          <nav>
            <a href="/user/login">Log In</a>
          </nav>
        </header>  
        <main className="landing">
          <div className="info">
            <h2>Description</h2>
            <p>Laborum consectetur laboris voluptate et mollit aliqua elit aute esse. Non laboris sit duis occaecat elit ex mollit ea ipsum incididunt. Duis duis laboris mollit commodo esse et ex ea dolore laborum. Adipisicing Lorem anim dolore amet est qui veniam et dolor occaecat tempor incididunt ex non. Amet sunt ex anim Lorem deserunt aute.</p>
          </div>
        <form className="sign-up" onSubmit={this.handleSubmit}>
          <h2>Sign Up</h2>
          <div className="">
            <label htmlFor='username'>Username</label>
            <input type="text" name='userName' placeholder="Username" onChange={e => this.changeUsername(e.target.value)} required/>
            {this.state.userName.touched && (<ValidationError message={this.validateUserName()} />)}
          </div>
          <div className="">
            <label>Password</label>
            <input type="Password" name='password' placeholder="Password" onChange={e => this.changePassword(e.target.value)} required/>
            {this.state.password.touched && (<ValidationError message={this.validatePassword()} />) }
          </div>
          <div className="">
            <label>Repeat Password</label>
            <input type="Password" name='repeatPassword' placeholder="Repeat Password" onChange={e => this.updateRepeatPassword(e.target.value)} required/>
            {this.state.repeatPassword.touched && (<ValidationError message={this.validateRepeatPassword()} />)}
          </div>
          <button className="s-button" type="submit" disabled={this.state.submitButtonDisabled}>Sign Up</button>
          <div>
              <a href="/user/login">Already have an account? Log in here!</a>
            </div>
        </form>
            
        </main> 
      </div>
    );
  }
}

export default Signup;

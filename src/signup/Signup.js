import React, { Component } from 'react';
import ValidationError from '../validationError'
import AuthApiService from '../services/auth-api-service';
import TokenService from '../services/token-service.js';
import config from '../config';
import Footer from '../footer/Footer'

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
        isActive: true
    };
  }

  componentDidMount() {
      console.log('Stateful component Sign Up successfully mounted.');
  }

  handleShow = () => {
    this.setState({
      isActive : false
    })
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
    event.preventDefault();
    const { userName, password, repeatPassword } = event.target;
    // console.log('username:', userName.value, 'password:', password.value);
    this.setState({ error: null })
    AuthApiService.postUser({
        user_name: userName.value,
        password: password.value,
    })

    .then(response => {
        console.log('user:', response)
        userName.value = ''
        password.value = ''
        repeatPassword.value = ''
        TokenService.saveAuthToken(response.authToken)
        TokenService.saveUserId(response.id)
        window.location = '/user/login'
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
        {TokenService.getUserId()} 
          <div>This is where the logo will be</div>
          <nav>
            <a href="/user/login">Log In</a>
          </nav>
        </header>  
        <main className="landing">
          { this.state.isActive ? 
          <div className="info">
            <h2>Book Library</h2>
            <p>Search for books you own or have read and create your digital library.</p>
            <button onClick={this.handleShow}>Sign up</button
            ><a href="/user/login">Already have an account? Log in here!</a>
          </div>
          :
          <form className="sign-up" onSubmit={this.handleSubmit}>
            <h2>Sign Up</h2>

              <label htmlFor='username'>Username</label>
              <input type="text" name='userName' placeholder="Username" onChange={e => this.changeUsername(e.target.value)} required/>
              {this.state.userName.touched && (<ValidationError message={this.validateUserName()} />)}


              <label>Password</label>
              <input type="Password" name='password' placeholder="Password" onChange={e => this.changePassword(e.target.value)} required/>
              {this.state.password.touched && (<ValidationError message={this.validatePassword()} />) }


              <label>Repeat Password</label>
              <input type="Password" name='repeatPassword' placeholder="Repeat Password" onChange={e => this.updateRepeatPassword(e.target.value)} required/>
              {this.state.repeatPassword.touched && (<ValidationError message={this.validateRepeatPassword()} />)}

            <button className="s-button" type="submit" disabled={this.state.submitButtonDisabled}>Sign Up</button>
            <div>
                <a href="/user/login">Already have an account? Log in here!</a>
            </div>
          </form>
         }
            
        </main> 
        
      </div>
    );
  }
}

export default Signup;

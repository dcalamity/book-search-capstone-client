import React, { Component } from 'react';


class Signup extends Component {
  constructor(props) {
      super(props);
      this.state = {  };
  }

  componentDidMount() {
      console.log('Stateful component successfully mounted.');
  }

  render() {
      // const { name } = this.props;
      // const { isLiked } = this.state;

      return (
        <main class="landing">
        <header class="header">
          <div class="top-left">This is where the logo will be</div>
          <div class="top-right">
            <a href="login.html">Log In</a>
          </div>
        </header>  
        <div class="middle">
          <div class="info">
            <h2>Description</h2>
          </div>
          <div class="sign-up">
            <h2>Sign Up</h2>
            <section class="input-user">
              <label>Username</label>
              <input type="text" name='Username' placeholder="Username"/>
            </section>
            <section class="input-pwd">
              <label>Password</label>
              <input type="Password" name='Password' placeholder="Password"/>
              <button class="s-button"><a href="dashboard.html">Sign Up</a></button>
              <div>
                <a href="login.html">Already have an account? Log in here!</a>
              </div>
            </section>
          </div>
        </div>
      </main> 
      );
  }
}

export default Signup;

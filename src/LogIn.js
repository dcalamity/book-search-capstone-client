import React, { Component } from 'react';

class LogIn extends Component {
  constructor(props) {
      super(props);
      this.state = { };
  }

  componentDidMount() {
      console.log('Stateful component successfully mounted.');
  }


  render() {
      // const { name } = this.props;
      // const { isLiked } = this.state;

      return (
        <div className="App">
        <body>
          <section>
            <div class="header">
              <div class="top-left">
                Logo
              </div>
              <div class="top-right">
                <a href="index.html">Sign up</a>
              </div>
            </div>
          </section>
          <section>
            <div class="log-in">
              <h2>Log in</h2>
              <section class="input-user">
                  <label>Username</label>
                  <input type="text" name='Username' placeholder="Username"/>
              </section>
              <section class="input-pwd">
                  <label>Password</label>
                  <input type="Password" name='Password' placeholder="Password"/>
                  <button class="s-button"><a href="dashboard.html">Sign In</a></button>
                  <div>
                    <a href="index.html">Don't have an account yet? Create one here!</a>
                  </div>
              </section>
              </div>
          </section>
        </body>
      </div>
      );
  }
}

export default LogIn;

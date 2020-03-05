import React from 'react';


function LogIn() {
  return (
      <div className="App">
        <body>
          <section role="header">
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
          <section role="footer">
            <div class="footer">
              <div class="top-left">
                © 2020 Eduardo Gonzalez
              </div>
              <div class="top-right">
                
              </div>
            </div>
          </section>
        </body>
      </div>
  );
}

export default LogIn;

import React from 'react';
import logo from './logo.svg';
import LogIn from './LogIn';
import Dashboard from './Dashboard';
import Booklist from './Booklist';
import Createcollection from './Createcollection';
import Bookinfo from './Bookinfo';
import Addbook from './Addbook';
import './index.css';

function App() {
  return (
      <body className="main">
        <main class="landing">
        <header class="header">
          <div class="top-left">This is where the logo will be</div>
          <div class="top-right">
            <a href="login.html">Log In</a>
          </div>
        </header>  
        <div role="sign up rectangle" class="middle">
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
      <section role="footer">
        <div class="footer">
          <div class="top-left">
            © 2020 Eduardo Gonzalez
          </div>
          <div class="top-right">
          </div>
        </div>
      </section> 
      <script src="script.js"></script>
      <LogIn/>
      <Dashboard/>
      <Booklist />
      <Createcollection/>
      <Bookinfo/>
      <Addbook/>
    </body>
    
  );
}

export default App;

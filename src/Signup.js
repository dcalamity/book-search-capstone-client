import React, { Component } from 'react';


class Signup extends Component {
  constructor(props) {
      super(props);
      this.state = { 
        Username: '',
        Password: '',
        LogInUserID: 0
       };
  }

  componentDidMount() {
      console.log('Stateful component Sign Up successfully mounted.');
  }

  changeUsername(Username) {
    this.setState({
    Username
    });
  }

  changePassword(Password) {
    this.setState({
    Password
    });
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

  render() {
      // const { name } = this.props;
      const { LogInUserID } = this.state;
      console.log(LogInUserID)

      return (
        <main className="landing">
        <header className="header">
          <div className="top-left">This is where the logo will be</div>
          <div className="top-right">
            <a href="/LogIn">Log In</a>
          </div>
        </header>  
        <div className="middle">
          <div className="info">
            <h2>Description</h2>
          </div>
          <form className="sign-up" onSubmit={this.handleSubmit}>
            <h2>Sign Up</h2>
            <section className="input-user">
              <label>Username</label>
              <input type="text" name='Username' placeholder="Username" onChange={e => this.changeUsername(e.target.value)}/>
            </section>
            <section className="input-pwd">
              <label>Password</label>
              <input type="Password" name='Password' placeholder="Password" onChange={e => this.changePassword(e.target.value)}/>
              <button className="s-button" type="submit">Sign Up</button>
              <div>
                <a href="/LogIn">Already have an account? Log in here!</a>
              </div>
            </section>
          </form>
        </div>
      </main> 
      );
  }
}

export default Signup;

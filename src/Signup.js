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

      fetch(`https://www.googleapis.com/books/v1/volumes?q=${this.state.search}&key=AIzaSyAOOYu0LFVQ45qOFjMl11H8Mdr2NYDxLqU`)
        .then(response => response.json())
        .then(data => {
          console.log(data)
         
          let outputObject = [];
          const bookDetail = data.items.map((value, key) => {
            console.log(key, value)

            outputObject[key] = {
              'title': value.volumeInfo.title, 
              'author': value.volumeInfo.authors, 
              'priceCheck': (value.saleInfo.saleability === 'FOR_SALE'),
            
              'Description': (('undefined' === value.volumeInfo.description) ? 'no description' : value.volumeInfo.description.slice(0,500)),

              'image': (value.volumeInfo.hasOwnProperty('imageLinks')) ? (value.volumeInfo.imageLinks.thumbnail) : ('https://icon-library.net/images/no-image-icon/no-image-icon-5.jpg')
            }
          })
          
          
          this.setState({
            LogInUserID: [outputObject]
          });
          // console.log(outputObject);
          }
        )      
   }

  render() {
      // const { name } = this.props;
      // const { isLiked } = this.state;

      return (
        <main className="landing">
        <header className="header">
          <div className="top-left">This is where the logo will be</div>
          <div className="top-right">
            <a href="login.html">Log In</a>
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

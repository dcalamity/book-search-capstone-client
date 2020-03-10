import React, { Component } from 'react';

class LogIn extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      Username: '',
      Password: '',
      LogInUserID: 0
     };
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

  componentDidMount() {
      console.log('Stateful component LogIn successfully mounted.');
  }

  handleSubmit = (event) => {
    event.preventDefault();

    // const search = document.getElementById('searchTerm').value;
    
     
      //  this.setState({
      //   search: [titleSearch]
      // })

      console.log(this.state)

      fetch(`https://www.googleapis.com/books/v1/volumes?q=${this.state.search}&key=AIzaSyAOOYu0LFVQ45qOFjMl11H8Mdr2NYDxLqU`)
        .then(response => response.json())
        .then(data => {
          console.log(data)
          // console.log(data.items[0].volumeInfo.title)
          let outputObject = [];
          const bookDetail = data.items.map((value, key) => {
            console.log(key, value)

            // outputObject['title'] = value.volumeInfo.title 
            // outputObject['author'] = value.volumeInfo.authors[0]
            // 'price': (value.saleInfo.saleability.includes('FOR_SALE')) ? value.saleInfo.listPrice.amount:'NOT_FOR_SALE',

            outputObject[key] = {
              'title': value.volumeInfo.title, 
              'author': value.volumeInfo.authors, 
              'priceCheck': (value.saleInfo.saleability === 'FOR_SALE'),
              // 'Price': (value.saleInfo.saleability.includes('NOT_FOR_SALE')) ? ('No Price') : '$' +(value.saleInfo.listPrice.amount),
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
        <div className="App">
          <section>
            <div className="header">
              <div className="top-left">
                Logo
              </div>
              <div className="top-right">
                <a href="index.html">Sign up</a>
              </div>
            </div>
          </section>
          <section>
            <div className="log-in">
              <h2>Log in</h2>
              
              <form onSubmit={this.handleSubmit} className="input-pwd">

                <section className="input-user">
                  <label>Username</label>

                  <input type="text" name='Username' placeholder="Username" onChange={e => this.changePassword(e.target.value)}/>
              
                  <input type="Password" name='Password' placeholder="Password" onChange={e => this.changePassword(e.target.value)}/>

                    <button className="s-button" type="submit"><a href="dashboard.html">Sign In</a>
                    </button>

                    <div>
                      <a href="index.html">Don't have an account yet? Create one here!</a>
                    </div>    
              </section>
                  
              </form>
              </div>
          </section>
      </div>
      );
  }
}

export default LogIn;

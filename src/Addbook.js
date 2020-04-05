import React, { Component } from 'react';

class Addbook extends Component {
  constructor(props) {
      super(props);
      this.state = { 
        search: '',
        books:[]
      };
  }

  componentDidMount() {
      console.log('Stateful component Add Book successfully mounted.');
  }

  changeSearch(search) {
    this.setState({
      search
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state.search)
    
    fetch(`https://www.googleapis.com/books/v1/volumes?q=${this.state.search}&key=AIzaSyAOOYu0LFVQ45qOFjMl11H8Mdr2NYDxLqU`)
    .then(response => response.json())
    .then(data => {
      console.log(data);
    })
  }

  render() {
      // const { name } = this.props;
      // const { isLiked } = this.state;

      return (
        <div className="App">
        <section>
        <h1>Dashboard</h1>
        <header className="d-header">
          <div className="top-left"></div>
          {/* <div className="h-center">
              <label>Book Title</label>
              <input type="text" name='Title' placeholder="Book Title"/>
              <button type="submit" placeholder="search">
                <a href="dashboardBooklist.html">Search</a>
              </button>
          </div> */}
          <div className="top-right">
            <ul className='link'>
              <li><a href="/user/dash">Home</a></li>
              <li><a href="/">Log Out</a></li>
            </ul>
            
          </div>
        </header>
        <main className="d-middle">
          <div className="c-list">
            <div className="l-book">
              <h2>Collection</h2>
              <div className="list-flex">
                <h3>
                  <a href="dashboardBooklist.html">
                      Scary Book list
                  </a>
                </h3>
                <div>
                  <a href="addbooktolist.html">Add a book</a>
                </div>
              </div>
              <div className="list-flex">
                <h3>
                  <a href="dashboardBooklist.html">
                    Funny Books
                  </a>
                </h3>
                <div>
              <a href="addbooktolist.html">Add a book</a>
            </div>
              </div>
              <button>
                <a href="createCollection.html">
                  Add list
                </a></button>
            </div>
          </div>
          <div className="book-list">
            <div className="b-place">
              <div>
              <label>Book Title</label>
              <form onSubmit={this.handleSubmit}>
                <input type="text" name='seach' placeholder="Book Title" onChange={e => this.changeSearch(e.target.value)}/>
                <button type="submit">
                  search
                </button>
              </form>
              
              
              </div>
            </div>
          </div>
        </main> 
      </section>
      </div>
      );
  }
}

export default Addbook;

import React, { Component } from 'react';

class Addbook extends Component {
  constructor(props) {
      super(props);
      this.state = { isLiked: false };
  }

  componentDidMount() {
      console.log('Stateful component Add Book successfully mounted.');
  }

  render() {
      // const { name } = this.props;
      // const { isLiked } = this.state;

      return (
        <div className="App">
        <section>
        <h1>Dashboard</h1>
        <header className="b-middle">
          <div className="top-left">This is where the logo will be</div>
          <div className="top-right">
            <a href="dashboard.html">Home</a>
            <a href="index.html">Log Out</a>
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
              <div className="h-center">
              <label>Book Title</label>
              <input type="Text" name='Title' placeholder="Book Title"/>
              <button type="submit" placeholder="search">
                search
              </button>
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

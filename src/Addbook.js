import React, { Component } from 'react';

class Addbook extends Component {
  constructor(props) {
      super(props);
      this.state = { isLiked: false };
  }

  componentDidMount() {
      console.log('Stateful component successfully mounted.');
  }


  render() {
      // const { name } = this.props;
      // const { isLiked } = this.state;

      return (
        <div className="App">
        <section>
        <h1>Dashboard</h1>
        <header class="b-middle">
          <div class="top-left">This is where the logo will be</div>
          <div class="top-right">
            <a href="dashboard.html">Home</a>
            <a href="index.html">Log Out</a>
          </div>
        </header>
        <main class="d-middle">
          <div class="c-list">
            <div class="l-book">
              <h2>Collection</h2>
              <div class="list-flex">
                <h3>
                  <a href="dashboardBooklist.html">
                      Scary Book list
                  </a>
                </h3>
                <div>
                  <a href="addbooktolist.html">Add a book</a>
                </div>
              </div>
              <div class="list-flex">
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
          <div class="book-list">
            <div class="b-place">
              <div class="h-center">
              <label>Book Title</label>
              <input type="text" name='Title' placeholder="Book Title"/>
              <submit>
                <button type="submit" placeholder="search">
                  <a href="dashboardBooklist.html">Search</a>
                </button>
              </submit>
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

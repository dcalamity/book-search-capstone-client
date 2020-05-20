import React, { Component } from 'react';
import TokenService from '../services/token-service.js';

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
          <header>
            <div>Logo</div>
            <nav className="top-right">
              <ul className='link'>
                <li>
                  <a href="/user/dash">Home {TokenService.getUserId()} 
                  </a>
                </li>
                <li>
                  <a href="/">Log Out</a>
                </li>
              </ul>
            </nav>
          </header>
          <main className="d-main">
            <div className="c-list">
              <h2>Collection</h2>
              
              <div className="list">
                <a href="/booklist/show/">
                  <h3>Scary Book list</h3>
                </a>
                <a href="/book/add">Add a book</a>
              </div>
              
              <div className="list">
                <a href="/booklist/show">
                  <h3>Funny Books</h3>
                </a>
                <a href="/book/add">Add a book</a>
              </div>

              <button className="s-button">
                <a href="/booklist/create">Add list</a>
              </button>
            </div>

            <div className="book-list">
              <div>
                <form id="search" onSubmit={this.handleSubmit}>
                  <label>Book Name</label>
                  <input className="book_search" type="book" name='seach' placeholder="Book Title" onChange={e => this.changeSearch(e.target.value)}/>
                  <button className="searchButton" type="submit">
                    search
                  </button>
              </form>
              </div>
              
            </div>
          </main> 
      </div>
      );
  }
}

export default Addbook;

import React, { Component } from 'react';


class Createcollection extends Component {
  constructor(props) {
      super(props);
      this.state = {
        collectionName :{
          value: ''
        }
       };
  }

  addCollectionName(collectionName) {
    this.setState({collectionName: {value: collectionName}})
  }

  componentDidMount() {
      console.log('Stateful component Create Collection successfully mounted.');
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
      // const { isLiked } = this.state;

      return (
        <div className="App">
        <header>
          <div>Logo</div>
          <nav className="top-right">
            <ul className='link'>
              <li><a href="/user/dash">Home</a></li>
              <li><a href="/">Log Out</a></li>
            </ul>
          </nav>
        </header>

        <main className="d-main">
          <div className="c-list">
            <h2>Add a collection</h2>
            <div className="list">
              <a href="/booklist/show/"><h3>Scary Book list</h3></a><a href="/book/add">Add a book</a>
            </div>
            <div className="list">
              <a href="/booklist/show"><h3>Funny Books</h3></a><a href="/book/add">Add a book</a>
            </div>
          </div>
          <div className="book-list">
            <form id="booksearch" onSubmit={this.handleSubmit}>
              <label>Collection Name: </label>
              <input type="text" name='Collection name' placeholder="2019 Books Read" onChange={e => this.addCollectionName(e.target.value)}/>
              <button type="submit">Create List</button>
            </form>
          </div>
          
        </main>
      </div>
      );
  }
}

export default Createcollection;

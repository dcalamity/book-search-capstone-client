import React, {Component} from 'react';
import TokenService from '../services/token-service.js';
import Navbar from '../navbar/navbar'
import { Link } from 'react-router-dom';
import config from '../config';
import Comments from '../comment/comments';

class Booklist extends Component {

  constructor(props) {
    super(props);
    this.state = {
      collectionsByUserId : [],
      books:[]
     };
  }

  componentDidMount(){
    // console.log(this.state)
   const collectionId = this.props.match.params.collectionId;
  console.log('component Booklist is mounting')

    let getCollectionByUserId = `${config.API_ENDPOINT}/book_collections/user/${TokenService.getUserId()}`;

    let booksInCollection = `${config.API_ENDPOINT}/books/collection/${collectionId}`;

    fetch(getCollectionByUserId)
   
    .then(response => response.json())
    
    .then(data => {
          this.setState({
            collectionsByUserId: data
          });
     })
     .then(() => {
       fetch(booksInCollection)
       .then((booksInCollection) => booksInCollection.json())
       .then((booksInCollection) => {
         this.setState({
           books: booksInCollection
         });
       })
     })

    .catch(error => this.setState({ error }))
      console.log('Stateful component Dashboard successfully mounted.');
  }

  deleteBook(event) {
    event.preventDefault()

    const data = {}

    const formData = new FormData(event.target)

    for (let value of formData) {
        data[value[0]] = value[1]
    }

    console.log(data)

    let {bookId, collectionId } = data;
    console.log(bookId, collectionId)
    const requestOptions = {
      method: 'DELETE'
    };


    
    fetch(`${config.API_ENDPOINT}/books/book/${bookId}`, {
      method: 'DELETE',
      headers: {
        'content-type': 'application/json',
      }

    })

    .then(response => {

      window.location = `/booklist/show/${collectionId}`
    })

  }
  
  render(){

    const existingBooks = 
    this.state.books.map((book, key) => {
    const linkString = `/book/show/${book.id}`

    let bookInfo = {
      bookId: `${book.id}`,
      collectionId: `${this.props.match.params.collectionId}`
    }

    return (
      <div className="book" key={key}>
        <form onSubmit={this.deleteBook}>
          <input type='hidden' name='bookId' defaultValue={book.id}></input>
          <input type='hidden' name='collectionId' defaultValue={bookInfo.collectionId}></input>
          <button type='submit'>Delete Book</button>
        </form>
        <Link to={linkString} alt={book.title} className="bookInfo">
          <h3>{book.title}</h3>
        </Link>
        <img src={`${book.img}`} alt={book.title} />
        <h3>{book.title}</h3>  
        <cite>{book.author}</cite>
        <address>{book.description.substring(0, 255)}</address>
        <Comments bookInfo={bookInfo} collectionId ={this.props.match.params.collectionId} />

      </div>)
      })

    const listofcollections = 
    this.state.collectionsByUserId.map((collection, key) => {
    const linkString = `/booklist/show/${collection.id}`
  
    return (
      <div className="list" key={key}>
        <a href={linkString}>
          <h3>{collection.collection_name}</h3>
        </a>
        <Link to={`/book/add/${collection.id}`}>Add a book</Link>
      </div>)

    });

    
    
    
    return (
      <div className="App">
        <Navbar />
      <main className="d-main">
      <div className="c-list">
            <h2>Collections</h2>{this.props.match.params.collectionId} 
            {listofcollections}
            
            <Link to="/booklist/create">Create a collection</Link>
          </div>
        <div className="book-list">
          {existingBooks}
        </div>
      </main>
    </div>
    )
    
  }
}

export default Booklist;

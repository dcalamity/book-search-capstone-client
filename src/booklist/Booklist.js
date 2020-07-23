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
        <div className='leftContainer'>
          <Link to={linkString} alt={book.title} >
            <div className="bookTitle">
               <h3>{book.title}</h3>
            </div>
         
          </Link>
          <img id="bookList" src={`${book.img}`} alt={book.title} />
          <cite>{book.author}</cite>
        </div>
        <div className='rightContainer'>
          <div className='summaryContainer'>
            <p>{book.description.substring(0, 100)} ...</p>
          </div>
          <div>
            <form className="bookForm"onSubmit={this.deleteBook}>
            <input type='hidden' name='bookId' defaultValue={book.id}></input>
            <input type='hidden' name='collectionId' defaultValue={bookInfo.collectionId}></input>
            <button type='submit' className='bookDeleteBtn'>Delete Book</button>
          </form> 
          </div>
          
        </div>
        {/* <div className='commentContainer'>
            <Comments bookInfo={bookInfo} collectionId ={this.props.match.params.collectionId} />
        </div> */}
      </div>
      )})

    const listofcollections = 
    this.state.collectionsByUserId.map((collection, key) => {
    const linkString = `/booklist/show/${collection.id}`
  
    return (
      <div className="list" key={key}>
        <a href={linkString} className='bookListName'>
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
            <h2>Collections</h2>
            {listofcollections}
            
            <Link to="/booklist/create">Create a collection</Link>
          </div>
        <div className="book-list">
          <h2>Books</h2>
          {existingBooks}
        </div>
      </main>
    </div>
    )
    
  }
}

export default Booklist;

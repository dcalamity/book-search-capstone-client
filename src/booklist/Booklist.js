import React, {Component} from 'react';
import TokenService from '../services/token-service.js';
import Navbar from '../navbar/navbar'
import { Link } from 'react-router-dom';
import config from '../config';

class Booklist extends Component {

  constructor(props) {
    super(props);
    this.state = {
      collectionsByUserId : [],
      books:[]
     };
  }

  componentDidMount(){

   const collectionId = this.props.match.params.collectionId;
   console.log(collectionId)

    let getCollectionByUserId = `${config.API_ENDPOINT}/book_collections/user/${TokenService.getUserId()}`;
    console.log(getCollectionByUserId)

    let booksInCollection = `${config.API_ENDPOINT}/books/collection/${collectionId}`;

    console.log(booksInCollection)

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

  //

  // navClick = () => {
  //   console.log('Navigating to a different collection')
    
  //   this.setState({
  //     books: []
  //   });

    // TokenService.getUserId = (id) => {
    //   console.log(id)
    // }

    // window.location = window.location.href
  // }

  //maybe instead of rending the list of books per collection id here, we create a component that fetches the books with whatever collectionId we pass into it and it fetched the books and structures them acordingly, then we just render the component here passing the information we need as props.
  
  render(){
    console.log(this.state)

    const existingBooks = 
    this.state.books.map((book, key) => {
    const linkString = `/book/show/${book.id}`
      // console.log(book)
    return (
      <div className="book" key={key}>
        <Link to={linkString} alt={book.title} className="bookInfo">
          <h3>{book.title}</h3>
        </Link>
        {/* <img src={`${book.volumeInfo.imageLinks.smallThumbnail}`} alt={book.volumeInfo.title} /> */}
        {/* <h3>{book.volumeInfo.title}</h3> */}
        <cite>{book.author}</cite>
        <address>{book.description}</address>
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

import React, { Component } from 'react';
import TokenService from '../services/token-service.js';
import config from '../config';
import { Link } from 'react-router-dom';

//

class Addbook extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
      books: [],
      booksFound: [],
      params: {}
    };
  }
  
  componentDidMount() {
    const collectionId = this.props.match.params.collectionId;
  
    // console.log(collectionId)
  
    let url = `${config.API_ENDPOINT}/books/collection/${collectionId}`;
  
    // console.log(url)
  
    fetch(url)
  
      .then(response => response.json())
  
      .then(data => {
        // console.log('success:', data)
        console.log(data)

        // let outPutObject = [];

        // let bookDetails = data

        this.setState({
          books: data
        })
      })
  
      .catch(err => {
        console.log(err)
      });
  
    console.log('Stateful component add book successfully mounted.');
  }
  
  changeSearch(search) {
    this.setState({
      search
    });
  }
  
  //Search tony halk don2
  
  handleSearch = (event) => {
    event.preventDefault();
    // console.log(this.state.search)
    function checkInteger(inputInteger) {
      // console.log(inputInteger)
      let outputValue = inputInteger
      if (inputInteger === "") {
        outputValue = 0
      }
      if (inputInteger === undefined) {
        outputValue = 0
      }
      if (inputInteger == null) {
        outputValue = 0
      }
      return outputValue
    }
    
    // if a string is undefinded or null, default it to "no details"
    function checkString(inputString) {
      let outputText = inputString
      if (inputString === undefined) {
        outputText = "no details"
      }
      if (inputString == null) {
        outputText = "no details"
      }
      return outputText
    }
    
    // if a URL is undefinded or null, default it to the root url "/"
    function checkURL(inputURL) {
      let outputURL = inputURL
      if (inputURL === undefined) {
        outputURL = "/"
      }
      if (inputURL == null) {
        outputURL = "/"
      }
      return outputURL
    }
    
    // if a URL is undefinded or null, default it to the root url "/"
    function checkEmptyImage(inputURL) {
      let outputURL = inputURL
      if (inputURL === undefined) {
        outputURL = "https://legacytaylorsville.com/wp-content/uploads/2015/07/No-Image-Available1.png"
      }
      if (inputURL == null) {
        outputURL = "https://legacytaylorsville.com/wp-content/uploads/2015/07/No-Image-Available1.png"
      }
      return outputURL
    }
    
    fetch(`https://www.googleapis.com/books/v1/volumes?q=${this.state.search}&key=AIzaSyAOOYu0LFVQ45qOFjMl11H8Mdr2NYDxLqU`)
      .then(response => response.json())
      .then(data => {


        console.log(data)
        let bookDetails = data.items.map((data, key) => {
          let authorsOutput = 'Unknow';
          if (data.volumeInfo.authors) {
            authorsOutput = checkString(data.volumeInfo.authors[0])
          }
          let publishedDateOuput = 0;
          if (data.volumeInfo.publishedDate) {
            publishedDateOuput = checkInteger(parseInt(data.volumeInfo.publishedDate))
          }
          // console.log(data.volumeInfo.categories)
          let outPutObject = {
            "title": checkString(data.volumeInfo.title),
            "author": authorsOutput,
            "genre": checkString(data.volumeInfo.categories),
            "isbn_id": checkString(data.volumeInfo.industryIdentifiers[0].identifier),
            "year_published": publishedDateOuput,
            "description": checkString(data.volumeInfo.description),
            "img": checkEmptyImage(data.volumeInfo.imageLinks.smallThumbnail),
          }
          console.log(outPutObject)
          return outPutObject 
        })

        this.setState({
          booksFound: bookDetails
        })
        console.log(this.state)
      })
  
      .catch(err => {
        console.log(err)
      })
  }
  
  addBookFromApi(e) {
    // console.log('hello there')
    e.preventDefault()
    // if an integer is empty, undefinded or null, default it to 0
  function checkInteger(inputInteger) {
    let outputValue = inputInteger
    if (inputInteger === "") {
      outputValue = 0
    }
    if (inputInteger === undefined) {
      outputValue = 0
    }
    if (inputInteger == null) {
      outputValue = 0
    }
    return outputValue
  }
  
  // if a string is undefinded or null, default it to "no details"
  function checkString(inputString) {
    let outputText = inputString
    if (inputString === undefined) {
      outputText = "no details"
    }
    if (inputString == null) {
      outputText = "no details"
    }
    return outputText
  }
  
  // if a URL is undefinded or null, default it to the root url "/"
  function checkURL(inputURL) {
    let outputURL = inputURL
    if (inputURL === undefined) {
      outputURL = "/"
    }
    if (inputURL == null) {
      outputURL = "/"
    }
    return outputURL
  }
  
  // if a URL is undefinded or null, default it to the root url "/"
  function checkEmptyImage(inputURL) {
    let outputURL = inputURL
    if (inputURL === undefined) {
      outputURL = "https://legacytaylorsville.com/wp-content/uploads/2015/07/No-Image-Available1.png"
    }
    if (inputURL == null) {
      outputURL = "https://legacytaylorsville.com/wp-content/uploads/2015/07/No-Image-Available1.png"
    }
    return outputURL
  }

  
  
    //create an object to store the search filters
    const data = {}
  
    //get all the form data from the form component
    const formData = new FormData(e.target)
  
    console.log(formData)
    //for each of the keys in form data populate it with form value
    for (let value of formData) {
      data[value[0]] = value[1]
    }
  
    //assigning the object from the form data to params in the state
    // this.setState({
    //     params: data
    // })
  
    //check if the state is populated with the search params data
    console.log(data)
  
    let payload = {
      "collection_id": data.collection_id,
      "finished": 0,
      "title": checkString(data.title),
      "author": checkString(data.author),
      "genre": checkString(data.genre),
      "isbn_id": checkInteger(data.isbn_id),
      "year_published": checkInteger(parseInt(data.year_published)),
      "description": checkString(data.description),
      "bookmark_page": 0,
      "book_rating": 0,
      "img": checkString(data.img)
    }
  
    console.log(payload)
  
    fetch(`${config.API_ENDPOINT}/books/collection/${data.collection_id}`, {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify(payload),
      })
  
      .then(response => {
        // console.log("response", response)
        window.location = `/book/add/${data.collection_id}` 
      })
      .catch(err => {
        console.log(err);
      });
  
  
  }

  render() {

    const existingBooks = 
    this.state.books.map((book, key) => {
    const linkString = `/book/show/${book.id}`
      // console.log(book)
    return (
      <div className="list" key={key}>
        <Link to={linkString} >
          <h3>{book.title}</h3>
        </Link>
        
      </div>)
    });

    const apiResults = 
    this.state.booksFound.map((book, key) => {
    
    return (
      <div key={key} >
         <form onSubmit={this.addBookFromApi} id="bookSearch">
          <img src={`${book.img}`} alt={book.title} />
          <h3>{book.title}</h3>
          <cite>{book.author}</cite>
          <address>{book.publisher}</address>
          <button type='submit'>Add to collection</button>
          <input type="hidden" defaultValue={book.title} name='title' ></input>
          <input type="hidden" defaultValue={book.author} name='author'></input>
          <input type="hidden" defaultValue={book.genre} name='genre' ></input>
          <input type="hidden" defaultValue={book.isbn_id} name='isbn_id' ></input>
          <input type="hidden" defaultValue={book.year_published} name='year_published'></input>
          <input type="hidden" defaultValue={book.description} name='description'></input>
          <input type="hidden" defaultValue={this.props.match.params.collectionId} name='collection_id'></input>
          <input type="hidden" defaultValue={book.img} name='img' ></input>
       </form> 
      </div>
      )
    });

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
              <h2>Books</h2>
              {existingBooks}
              
              
              <button className="s-button">
                <a href="/booklist/create">Add a collection</a>
              </button>
            </div>

            <div className="book-list">
              <div>
                <form id="search" onSubmit={this.handleSearch}>
                  <label>Book Name</label>
                  <input className="book_search" type="book" name='seach' placeholder="Book Title" onChange={e => this.changeSearch(e.target.value)}/>
                  <button className="searchButton" type="submit">
                    search
                  </button>
                </form>
              </div>
              {apiResults}
            </div>
          </main> 
      </div>
      );
  }
}

export default Addbook;

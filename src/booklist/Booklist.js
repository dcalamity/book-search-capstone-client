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

    fetch(getCollectionByUserId)
   
    .then(response => response.json())
    
    .then(data =>
          this.setState({
            collectionsByUserId: data
          })
        )
      .catch(error => this.setState({ error }))
      console.log('Stateful component Dashboard successfully mounted.');
  }


  render(){

    
    
    
    return (
      <div className="App">
        <Navbar />
      <main className="d-main">
      <div className="c-list">
            <h2>Collections</h2> 
            {/* {listofcollections} */}
            {this.state.collectionsByUserId.map((collection, key) => (
              <div className="list" key={key}>
                <Link  to={`/booklist/show${collection.id}`} >
                <h3>{collection.collection_name}</h3>
                </Link>
                <Link to={`/book/add${collection.id}`}>Add a book</Link>
              </div>
            ))}
            <Link to="/booklist/create">Create a collection</Link>
          </div>
        <div className="book-list">
          <div className="book">
            <Link to="/book/show/" className="bookInfo">
              <h3>Little red riding hood.</h3>
            </Link>
            <cite>Robinhood R.L</cite>
            <address>placeholder</address>
          </div>
          <div className="book">
            <Link to="/book/show/" className="bookInfo">
              <h3>Little red riding hood.</h3>
            </Link>
            <cite>Robinhood R.L</cite>
            <address>placeholder</address>
          </div>
          <div className="book">
            <Link to="/book/show/" className="bookInfo">
              <h3>Little red riding hood.</h3>
            </Link>
            <cite>Robinhood R.L</cite>
            <address>placeholder</address>
            <p>Eu duis nulla proident consectetur mollit officia. Sit aliqua velit exercitation deserunt pariatur pariatur velit laboris occaecat nostrud esse sint magna laborum. Ex anim nostrud commodo reprehenderit irure quis mollit occaecat sit tempor enim minim ipsum. Elit voluptate sunt do laboris mollit veniam pariatur mollit. Officia aute laboris incididunt enim sint ipsum Lorem elit enim excepteur duis sunt aliquip.</p>
          </div>
          <div className="book">
            <Link to="/book/show/" className="bookInfo">
              <h3>Little red riding hood.</h3>
            </Link>
            <cite>Robinhood R.L</cite>
            <address>placeholder</address>
          </div>
          <div className="book">
            <Link to="/book/show/" className="bookInfo">
              <h3>Little red riding hood.</h3>
            </Link>
            <cite>Robinhood R.L</cite>
            <address>placeholder</address>
          </div>
          <div className="book">
            <Link to="/book/show/" className="bookInfo">
              <h3>Little red riding hood.</h3>
            </Link>
            <cite>Robinhood R.L</cite>
            <address>placeholder</address>
          </div>
          <div className="book">
            <Link to="/book/show/" className="bookInfo">
              <h3>Little red riding hood.</h3>
            </Link>
            <cite>Robinhood R.L</cite>
            <address>placeholder</address>
          </div>
          <div className="book">
            <Link to="/book/show/" className="bookInfo">
              <h3>Little red riding hood.</h3>
            </Link>
            <cite>Robinhood R.L</cite>
            <address>placeholder</address>
          </div>
        </div>
      </main>
    </div>
    )
    
  }
}

export default Booklist;

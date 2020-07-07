import React, {Component} from 'react';
// import Booklist from '../booklist/Booklist';
// import Footer from '../footer/Footer'
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import TokenService from '../services/token-service.js';
import config from '../config';
import { Link } from 'react-router-dom';
import Navbar from '../navbar/navbar'


class Dashboard extends Component {

  constructor(props) {
    super(props);
    this.state = {
      collectionsByUserId : []
     };
}

  componentDidMount(){
    let getCollectionByUserId = `${config.API_ENDPOINT}/book_collections/user/${TokenService.getUserId()}`;

    console.log(getCollectionByUserId)

    fetch(getCollectionByUserId)
   
    .then(response => response.json())
    
    .then(data =>
      { 
        if ('error' in data){
          return console.log(data)
        } 
        this.setState({
            collectionsByUserId: data
        })
      })
      .catch(error => console.log(error))
      // console.log('Stateful component Dashboard successfully mounted.');
  }

  deleteCollection(event) {
    event.preventDefault()

    const data = {}

    const formData = new FormData(event.target)

    for (let value of formData) {
        data[value[0]] = value[1]
    }

    console.log(data)

    let {collectionId} = data;
    console.log(collectionId)
    const requestOptions = {
      method: 'DELETE'
    };


    
    fetch(`${config.API_ENDPOINT}/book_collections/collection/${collectionId}`, {
      method: 'DELETE',
      headers: {
        'content-type': 'application/json',
      }

    })

    .then(response => {

      window.location = `/user/dash`
    })

  }

  render () {

    console.log(this.state.collectionsByUserId)

    let listofcollections = 'Unknown';
    

    if(this.state.collectionsByUserId.length !== 0 ){
      listofcollections = this.state.collectionsByUserId.map((collection, key) => {
        const linkString = `/booklist/show/${collection.id}`
      
    return (
      <div className="list" key={key}>
        <Link to={linkString}>
          <h3>{collection.collection_name}</h3>
        </Link>
        <Link to={`/book/add/${collection.id}`}>Add a book</Link>
        <form onSubmit={this.deleteCollection} className="deleteForm">
          <input type="hidden" name='collectionId' defaultValue={collection.id}></input> 
          <button type="submit" className="deleteButton">Delete Collection</button>
        </form>
      </div>)
    });
    }
    

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
            <h2>Click on a collection to see your books!</h2>
          </div>
        </main>
      </div>
    );
  }
  
}

export default Dashboard;

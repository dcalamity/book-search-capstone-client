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
      this.setState({
            collectionsByUserId: data
          })
        )
      // .catch(error => this.setState({ error }))
      console.log('Stateful component Dashboard successfully mounted.');
  }

  componentWillUnmount(){

  }

  render () {

    console.log(this.state)

    let listofcollections = 'Unknown';
    
    //still giving me issues when I sign up a new user

    if(Object.keys(this.state.collectionsByUserId).length !== 0 ){
      listofcollections = this.state.collectionsByUserId.map((collection, key) => {
        const linkString = `/booklist/show/${collection.id}`
      
    return (
      <div className="list" key={key}>
        <Link to={linkString} >
          <h3>{collection.collection_name}</h3>
        </Link>
        <Link to={`/book/add/${collection.id}`}>Add a book</Link>
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

import React, {Component} from 'react';
// import Booklist from '../booklist/Booklist';
// import Footer from '../footer/Footer'
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import TokenService from '../services/token-service.js';
import config from '../config';
import { Link } from 'react-router-dom';


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
      // console.log(data)
      (data.length === 0)
          ? this.setState({
              collectionsByUserId: <div>
                  <p>Oops.. looks like you don't have any collections created.</p>
              </div>
          })
          : this.setState({
            collectionsByUserId: data
          })
        )
      .catch(error => this.setState({ error }))

    

      console.log('Stateful component Dashboard successfully mounted.');
  }

  render () {

    // const listofcollections = this.state.collectionsByUserId.map((collection, key) => {
    //   const linkString = `/booklist/show/${collection.id}`
    //   // console.log(collection.id)
      
    // return (
    // <div className="list" key={key}>
    //   <a href={linkString} >
    //     <h3>{collection.collection_name}</h3>
    //   </a>
    //   <a href="/book/add">Add a book</a>
    // </div>)

    // });

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
                <li><a href="/">Log Out</a></li>
              </ul>
            </nav>
          </header>
  
          <main className="d-main">
            
            <div className="c-list">
              <h2>Collections</h2> 
              {/* {listofcollections} */}
              {this.state.collectionsByUserId.map((collection, key) => (
                <div className="list" key={key}>
                   <a  href={`/booklist/show${collection.id}`} >
                   <h3>{collection.collection_name}</h3>
                  </a>
                  <Link to={`/book/add${collection.id}`}>Add a book</Link>
                </div>
              ))}

              <a href="/booklist/create">Create a collection</a>
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

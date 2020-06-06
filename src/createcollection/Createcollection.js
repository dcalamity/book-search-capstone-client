import React, { Component } from 'react';
import TokenService from '../services/token-service.js';
import config from '../config';
// import List from '../list'

class Createcollection extends Component {
  constructor(props) {
      super(props);
      this.state = {
        collectioName : {},
        collectionsByUserId : []
       };
  }

  addCollectionName(collectionName) {
    this.setState({collectionName: {value: collectionName}})
  }


  componentDidMount() {
    let url = `${config.API_ENDPOINT}/book_collections/user/${TokenService.getUserId()}`;
    console.log(url)

    fetch(url)
   
    .then(response => response.json())

    .then(data => { 
      console.log('success:', data)
      this.setState({collectionsByUserId: data})
    })

    .catch(err => {
            console.log(err)
      });    

      console.log('Stateful component Create Collection successfully mounted.');
  }


  // handleSubmit = (event) => {
  //   event.preventDefault();
  //     console.log(this.state)
  //     fetch(``)
  //       .then(response => {
  //         if (response.ok) {
  //             return response.json();
  //         }
  //         throw new Error(response.statusText);
  //       })
  //       .then(data => {
  //         console.log(data)
  //         //here we will have user sign up processing
  //         this.setState({
  //           LogInUserID: 55
  //         });
  //       })
  //      .catch(err => {
  //         console.log(err);
  //       });   
  //  }

   handleSubmit = (event) => {
    event.preventDefault();
    let User_Id = TokenService.getUserId();
    // console.log(User_Id)
    
    // console.log(this.state.collectionName)

    const collectionName = this.state.collectionName.value;

    // console.log('collection name:', collectionName)

    const payload = {
      collection_name : collectionName,
      user_id: User_Id
    }

    fetch(`${config.API_ENDPOINT}/book_collections/all`, {
    method: 'POST',
    headers: {
        'content-type': 'application/json',
    },
    body: JSON.stringify(payload), 
    })

    .then(response => {
      // console.log("response", response)
      window.location ='/booklist/create'
    })
    .catch(err => {
      console.log(err);
    });   
   }
  
  render() {
    // console.log(this.state)
      // const { name } = this.props;
      // const { isLiked } = this.state;
    const listofcollections = this.state.collectionsByUserId.map((collection, key) => {
      const linkString = `/booklist/show/${collection.id}`
      // console.log(collection.id)

    return (
    <div className="list" key={key}>
      <a href={linkString} >
      <h3>{collection.collection_name}</h3>
      </a>
      <a href={`/book/add/${collection.id}`}>Add a book</a>
    </div>)
    
    });
   

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
          <h2>Your collections</h2>
            {listofcollections}
        </div>
        <div className="create_collection">
          
          <form className="createcollection" onSubmit={this.handleSubmit}>
            <h2>Add a collection</h2>
            <label>Collection Name: </label>
            <input type="text" className="collection" name='Collection name' placeholder="2019 Books Read" onChange={e => this.addCollectionName(e.target.value)}/>
            <button type="submit" className="s-button">Create List</button>
          </form>
        </div>
        
      </main>
    </div>
    );
  }
}

export default Createcollection;

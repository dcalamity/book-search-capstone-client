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
        <section>
        <h1>Dashboard</h1>
        <header className="d-header">
          <div className="top-left"></div>
          {/* <div className="h-center">
              <label>Book Title</label>
              <input type="text" name='Title' placeholder="Book Title"/>
              <button type="submit" placeholder="search">
                <a href="dashboardBooklist.html">Search</a>
              </button>
          </div> */}
          <div className="top-right">
            <ul className='link'>
              <li><a href="/user/dash">Home</a></li>
              <li><a href="/">Log Out</a></li>
            </ul>
            
          </div>
        </header>
  
        <main className="d-middle">
  
          <div className="c-list">
            <div className="l-book">
              <h2>Make your collection</h2>
              <div>
               
              </div>
            </div>
          </div>
          
  
          
            <div className="book-search">
               <form className="Collection-entry" onSubmit={this.handleSubmit}>
                  <label>Collection Name: </label>
                  <input type="text" name='Collection name' placeholder="2019 Books Read" onChange={e => this.addCollectionName(e.target.value)}/>
                  <button type="submit">Create List</button>
                </form>
            </div>
          
        </main>
      </section>
      </div>
      );
  }
}

export default Createcollection;

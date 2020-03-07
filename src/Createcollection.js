import React, { Component } from 'react';


class Createcollection extends Component {
  constructor(props) {
      super(props);
      this.state = { };
  }

  componentDidMount() {
      console.log('Stateful component successfully mounted.');
  }



  render() {
      // const { name } = this.props;
      // const { isLiked } = this.state;

      return (
        <div className="App">
        <section>
        <h1>Dashboard</h1>
        <header className="c-collection">
          <div className="top-left">This is where the logo will be</div>
          <div className="top-right">
            <a href="index.html">Log Out</a>
            <a href="dashboard.html">Home</a>
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
               <section className="Collection-entry">
                  <label>Collection Name: </label>
                  <input type="text" name='Collection name' placeholder="2019 Books Read"/>
                  <button><a href="dashboardBooklist.html">Create List</a></button>
                </section>
            </div>
          
        </main>
      </section>
      </div>
      );
  }
}

export default Createcollection;

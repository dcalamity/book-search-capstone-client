import React from 'react';


function Booklist() {
  return (
    <div className="App">
      <h1>Dashboard</h1>
      <header className="d-header">
        <div className="top-left">This is where the logo will be</div>
        {/* <div className="h-center">
          <label>Book Title</label>
          <input type="text" name='Title' placeholder="Book Title"/>
            <button type="submit" placeholder="search">
              <a href="index.html">Search</a>
            </button>
        </div> */}
        <div className="top-right">
            <ul className='link'>
              <li><a href="dashboard.html">Home</a></li>
              <li><a href="index.html">Log Out</a></li>
            </ul>
          </div>
      </header>

      <main className="d-middle">

        <div className="c-list">
          <div className="l-book">
            <h2>Collection</h2>

            <div className="list-flex">
              <h3>
                <a href="dashboardBooklist.html">
                    Scary Book list
                </a>
              </h3>
              <div>
                <a href="addbooktolist.html">Add a book</a>
              </div>
            </div>

            <div className="list-flex">
              <h3>
                <a href="dashboardBooklist.html">
                  Funny Books
                </a>
              </h3>
              <div>
                <a href="addbooktolist.html">Add a book</a>
              </div>
            </div>

            <button><a href="createCollection.html">Add a collection</a></button>
          </div>
        </div>

        <div className="book-list">

           

          <a href="bookInfo.html" className="bookInfo">
            <div className="book">
              <cite>
                <h3>
                Little red riding hood.
                </h3>
              </cite>
              <address>
                placeholder
              </address>
            </div>
          </a>

        </div>
      </main>
    </div>
  );
}

export default Booklist;

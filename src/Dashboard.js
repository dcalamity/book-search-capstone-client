import React from 'react';
import Booklist from './Booklist';
import Footer from './Footer'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";



function Dashboard() {
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
              <button>
                <a href="createCollection.html">
                  Add list
                </a></button>
            </div>
            
            
          </div>
          

          <div className="book-list">
            <div className="b-place">
              <h2>Click on a collection to see your books!</h2>
            </div>
          </div>
        </main>
      </section>
    </div>
  );
}

export default Dashboard;

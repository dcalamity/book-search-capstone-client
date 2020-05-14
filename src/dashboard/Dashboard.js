import React from 'react';
import Booklist from '../booklist/Booklist';
import Footer from '../footer/Footer'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import TokenService from '../services/token-service.js';


function Dashboard() {
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
            <h2>Collection</h2>
            
            <div className="list">
              <a href="/booklist/show/">
                <h3>Scary Book list</h3>
              </a>
              <a href="/book/add">Add a book</a>
            </div>
            
            <div className="list">
              <a href="/booklist/show">
                <h3>Funny Books</h3>
              </a>
              <a href="/book/add">Add a book</a>
            </div>

            <button className="s-button">
              <a href="/booklist/create">Add list</a>
            </button>
          </div>
         
          <div className="book-list">
            <h2>Click on a collection to see your books!</h2>
          </div>
        </main>
    </div>
  );
}

export default Dashboard;

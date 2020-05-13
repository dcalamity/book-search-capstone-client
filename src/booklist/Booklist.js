import React from 'react';


function Booklist() {
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
        <h2>Collection</h2>
        <div className="list">
          <a href="/booklist/show/"><h3>Scary Book list</h3></a><a href="/book/create">Add a book</a>
        </div>
        <div className="list">
          <a href="/booklist/show"><h3>Funny Books</h3></a><a href="/book/create">Add a book</a>
        </div>
        <button className="s-button"><a href="/booklist/create">Add a list</a></button>
        </div>
        <div className="book-list">
          <div className="book">
            <a href="/book/show/" className="bookInfo">
              <h3>Little red riding hood.</h3>
            </a>
            <cite>Robinhood R.L</cite>
            <address>placeholder</address>
          </div>
          <div className="book">
            <a href="/book/show/" className="bookInfo">
              <h3>Little red riding hood.</h3>
            </a>
            <cite>Robinhood R.L</cite>
            <address>placeholder</address>
          </div>
          <div className="book">
            <a href="/book/show/" className="bookInfo">
              <h3>Little red riding hood.</h3>
            </a>
            <cite>Robinhood R.L</cite>
            <address>placeholder</address>
            <p>Eu duis nulla proident consectetur mollit officia. Sit aliqua velit exercitation deserunt pariatur pariatur velit laboris occaecat nostrud esse sint magna laborum. Ex anim nostrud commodo reprehenderit irure quis mollit occaecat sit tempor enim minim ipsum. Elit voluptate sunt do laboris mollit veniam pariatur mollit. Officia aute laboris incididunt enim sint ipsum Lorem elit enim excepteur duis sunt aliquip.</p>
          </div>
          <div className="book">
            <a href="/book/show/" className="bookInfo">
              <h3>Little red riding hood.</h3>
            </a>
            <cite>Robinhood R.L</cite>
            <address>placeholder</address>
          </div>
          <div className="book">
            <a href="/book/show/" className="bookInfo">
              <h3>Little red riding hood.</h3>
            </a>
            <cite>Robinhood R.L</cite>
            <address>placeholder</address>
          </div>
          <div className="book">
            <a href="/book/show/" className="bookInfo">
              <h3>Little red riding hood.</h3>
            </a>
            <cite>Robinhood R.L</cite>
            <address>placeholder</address>
          </div>
          <div className="book">
            <a href="/book/show/" className="bookInfo">
              <h3>Little red riding hood.</h3>
            </a>
            <cite>Robinhood R.L</cite>
            <address>placeholder</address>
          </div>
          <div className="book">
            <a href="/book/show/" className="bookInfo">
              <h3>Little red riding hood.</h3>
            </a>
            <cite>Robinhood R.L</cite>
            <address>placeholder</address>
          </div>
        </div>
        
      </main>
    </div>
  );
}

export default Booklist;

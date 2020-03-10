import React from 'react';


function Bookinfo() {
  return (
    <div className="App">
      <section>
      <h1>Book Info</h1>
      <header className="d-header">
        <div className="top-left">This is where the logo will be</div>
        <div className="top-right">
          <a href="dashboard.html">Home</a>
          <a href="index.html">Log Out</a>
        </div>
      </header>

      <main className="b-square">

        <div className="book-cover">
          <h2>Book Title</h2>
        </div>
        
        <div className="mero-mole">
          <div>
            <h3>Title</h3>
            <h3>Author</h3>
            <p>Comments</p>
          </div>

           <div>
            <label for="list">Choose a collection:</label>
            <select id="Collections" label="collection names">
              <option value="Scary Books">Scary Books</option>
              <option value="Funny Books">Funny Books</option>
            </select> 
          </div>  
        </div>

      </main>
    </section>
    </div>
  );
}

export default Bookinfo;

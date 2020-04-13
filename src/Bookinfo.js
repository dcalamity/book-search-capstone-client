import React from 'react';


function Bookinfo() {
  return (
    <div className="App">
      <section>
      <h1>Book Info</h1>
      <header className="d-header">
          <div className="top-left">Logo</div>
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
          <div className="infomiddle">
            <form action="#" method="post" className='textbox'>
            <textarea> 
              This is a simple comment box. 
            </textarea>
            <button type='submit'>Submit</button>
          </form>
          </div> 
          <div>
            <label>Choose a collection:</label>
            <select id="Collections" label="collection names">
              <option value="Scary Books">
                Scary Books
              </option>
              <option value="Funny Books">
                Funny Books
              </option>
            </select> 
          </div>  
        </div>

      </main>
    </section>
    </div>
  );
}

export default Bookinfo;

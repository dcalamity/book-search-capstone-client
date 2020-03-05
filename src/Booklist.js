import React from 'react';


function Booklist() {
  return (
    <div className="App">
      <section>
      <h1>Dashboard</h1>
      <header class="d-header">
        <div class="top-left">This is where the logo will be</div>
        <div class="h-center">
          <label>Book Title</label>
          <input type="text" name='Title' placeholder="Book Title"/>
          <submit>
            <button type="submit" placeholder="search">
              <a href="index.html">Search</a>
            </button>
          </submit>
        </div>
        <div class="top-right">
          <a href="dashboard.html">Home</a>
          <a href="index.html">Log out</a>
        </div>
      </header>

      <main class="d-middle">

        <div class="c-list">
          <div class="l-book">
            <h2>Collection</h2>

            <div class="list-flex">
              <h3>
                <a href="dashboardBooklist.html">
                    Scary Book list
                </a>
              </h3>
              <div>
                <a href="addbooktolist.html">Add a book</a>
              </div>
            </div>

            <div class="list-flex">
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

        <div class="book-list">

           <a href="bookInfo.html" class="bookInfo">
            <div class="book">
              
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

          <a href="bookInfo.html" class="bookInfo">
            <div class="book">
              
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

          <a href="bookInfo.html" class="bookInfo">
            <div class="book">
              
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

          <a href="bookInfo.html" class="bookInfo">
            <div class="book">
              
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

           <a href="bookInfo.html" class="bookInfo">
            <div class="book">
              
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
      <section role="footer">
      <div class="footer">
        <div class="top-left">
          © 2020 Eduardo Gonzalez
        </div>
        <div class="top-right">
          
        </div>
      </div>
    </section> 
    </section>
    </div>
  );
}

export default Booklist;

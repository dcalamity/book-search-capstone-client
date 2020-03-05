import React from 'react';


function Createcollection() {
  return (
    <div className="App">
      <section>
      <h1>Dashboard</h1>
      <header class="c-collection">
        <div class="top-left">This is where the logo will be</div>
        <div class="top-right">
          <a href="index.html">Log Out</a>
          <a href="dashboard.html">Home</a>
        </div>
      </header>

      <main class="d-middle">

        <div class="c-list">
          <div class="l-book">
            <h2>Make your collection</h2>
            <div>
             
            </div>
          </div>
        </div>
        

        
          <div class="book-search">
             <section class="Collection-entry">
                <label>Collection Name: </label>
                <input type="text" name='Collection name' placeholder="2019 Books Read"/>
                <button><a href="dashboardBooklist.html">Create List</a></button>
              </section>
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

export default Createcollection;

import React from 'react';


function Bookinfo() {
  return (
    <div className="App">
      <section>
      <h1>Book Info</h1>
      <header className="d-header">
          <div className="top-left">Logo</div>
          <div className="top-right">
            <ul className='link'>
              <li><a href="/user/dash">Home</a></li>
              <li><a href="/">Log Out</a></li>
            </ul>
          </div>
     </header>

      <main className="b-square">

        <div className="book-cover">
          <h2>Book</h2>
        </div>
        
        <div className="mero-mole">
          <div>
            <h3>Title: The perks of being a wallflower</h3>
            <h3>Author: T.R. Reid</h3>
            <h4>Description: </h4>
            <h2>Comments</h2>
            <div className="bubble-list">
                <div className="bubble clearfix">
                  <div className="bubble-content">
                    <p>Here is a comment I made</p>
                  </div>
                </div>
            </div>
            <div className="bubble-list">
                <div className="bubble clearfix">
                  <div className="bubble-content">
                    <p>Here is a comment I made</p>
                  </div>
                </div>
            </div>
          </div>
          <div className="infomiddle">
            <form action="#" method="post" className='textbox'>
            <textarea className='commentbox' placeholder="Add comment.." > 
              
            </textarea>
            <button type='submit' className="sbtcm" >Submit</button>
          </form>
          </div> 
        </div>

      </main>
    </section>
    </div>
  );
}

export default Bookinfo;

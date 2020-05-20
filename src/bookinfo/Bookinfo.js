import React from 'react';


function Bookinfo() {
  return (
    <div className="App">
      <section>
      <header className="d-header">
          <div className="top-left">Logo</div>
          <div className="top-right">
            <ul className='link'>
              <li><a href="/user/dash">Home</a></li>
              <li><a href="/">Log Out</a></li>
            </ul>
          </div>
     </header>
    <main className="bookinfo">
        <div>
          <h3>Title: The perks of being a wallflower</h3>
          <h3>Author: T.R. Reid</h3>
          <h4>Description: </h4>
          <h2>Comments</h2>
        </div>
        <div>
          <form action="#" method="post" className='comment' type="comment">
            <input className='commentbox' placeholder="Add comment.." type="comment" ></input>
          <button type='submit' className="sbtcm" >Submit</button>
        </form>
        </div> 
    </main>
    </section>
    </div>
  );
}

export default Bookinfo;

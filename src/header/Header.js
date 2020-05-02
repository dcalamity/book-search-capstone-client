import React from 'react';


function Footer() {
  return (
    <header className="d-header">
          <div className="top-left">This is where the logo will be</div>
          {/* <div className="h-center">
              <label>Book Title</label>
              <input type="text" name='Title' placeholder="Book Title"/>
              <button type="submit" placeholder="search">
                <a href="dashboardBooklist.html">Search</a>
              </button>
          </div> */}
          <div className="top-right">
            <ul className='link'>
              <li><a href="dashboard.html">Home</a></li>
              <li><a href="index.html">Log Out</a></li>
            </ul>
          </div>
        </header>
  );
}

export default Footer;

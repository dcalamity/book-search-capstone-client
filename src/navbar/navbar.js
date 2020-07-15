import React, {Component} from 'react'
import TokenService from '../services/token-service.js';
import { Link } from 'react-router-dom';


class navbar extends Component  {

  logOutClick = () => {
    console.log('Logging out')
    TokenService.clearAuthToken()
    TokenService.getUserId = (id) => {
      // console.log(id)
    }

    window.location='/'
  }

  render(){

    
    return (      
      <header>
        <div>Logo</div>
        <nav className="top-right">
          <ul className='link'>
            <li>
              <Link to="/user/dash">Home</Link>
            </li>
            <li>
              <Link to="/" onClick={this.logOutClick}>Log Out</Link>
            </li>
          </ul>
        </nav>
      </header>
    )}
}

export default navbar;
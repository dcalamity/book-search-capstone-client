import React, { Component } from 'react';
import Signup from './signup/Signup';
import Footer from './footer/Footer'
import LogIn from './login/LogIn';
import Dashboard from './dashboard/Dashboard';
import Createcollection from './createcollection/Createcollection';
import Bookinfo from './bookinfo/Bookinfo';
import Addbook from './addbook/Addbook';
// import NotFound from './NotFound';
import { Route } from 'react-router-dom';
import './index.css';
import Booklist from './booklist/Booklist';
// import TokenService from './services/token-service.js';


class App extends Component {
  constructor(props) {
      super(props);
      this.state = { 

      };
  }

  componentDidMount() {
      console.log('Stateful component Appjs successfully mounted.');
  }

  render() {
      // const { name } = this.props;
      // const { isLiked } = this.state;
      return (
        <div>
          <Route exact path='/' component={Signup}  />
         
          <Route path='/user/login' component={LogIn}  />
          
          <Route path='/user/dash' component={Dashboard}  />

          <Route path='/booklist/show/:collectionId' component={Booklist}  />
        
          <Route path='/booklist/create' component={Createcollection}  />
          
          <Route path='/book/show/:bookId' component={Bookinfo}  />
         
          <Route path='/book/add/:collectionId' component={Addbook}  />
          
          <Footer />
        </div>
      );
  }
}

export default App;

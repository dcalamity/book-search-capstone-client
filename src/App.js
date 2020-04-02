import React, { Component } from 'react';
import Signup from './Signup';
import Footer from './Footer'
import LogIn from './LogIn';
import Dashboard from './Dashboard';
import Createcollection from './Createcollection';
import Bookinfo from './Bookinfo';
import Addbook from './Addbook';
import NotFound from './NotFound';
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom';
import './index.css';
import Booklist from './Booklist';


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
    
          <Switch>
               <Route exact path='/' component={Signup}  />
              {/* Stateful */}
              <Route path='/user/login' component={LogIn}  />
              
              <Route path='/user/dash' component={Dashboard}  />

              <Route path='/booklist/show' component={Booklist}  />
              
              <Route path='/booklist/create' component={Createcollection}  />
              {/* Stateful */}
              <Route path='/book/show' component={Bookinfo}  />
              {/* Stateful */}
              <Route path='/book/create' component={Addbook}  />

              <Route component={NotFound} />
              {/* Stateful */}
          </Switch>
            <Footer />
        </div>
      );
  }
}

export default App;

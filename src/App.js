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
      this.state = { };
  }

  componentDidMount() {
      console.log('Stateful component Appjs successfully mounted.');
  }

  render() {
      // const { name } = this.props;
      // const { isLiked } = this.state;

      return (
        <div>
          {/* Stateful */}

          {/* NAV LINK  */}
          
          <Switch>
               < Route exact path='/' component={Signup}  />
              {/* Stateful */}
              < Route path='/LogIn' component={LogIn}  />
              
              < Route path='/Dash' component={ Dashboard}  />

              < Route path='/List' component={ Booklist}  />
              
              < Route path='/Create' component={Createcollection}  />
              {/* Stateful */}
              < Route path='/Info' component={Bookinfo}  />
              {/* Stateful */}
              < Route path='/Add' component={Addbook}  />

              <Route component={NotFound} />
              {/* Stateful */}
              
              <Footer />
          </Switch>
            
        </div>
      );
  }
}

export default App;

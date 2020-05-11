import React, { Component } from './node_modules/react';
import Signup from '../signup/Signup';
import Footer from '../footer/Footer'
import LogIn from '../login/LogIn';
import Dashboard from '../dashboard/Dashboard';
import Createcollection from '../createcollection/Createcollection';
import Bookinfo from '../bookinfo/Bookinfo';
import Addbook from '../addbook/Addbook';
import NotFound from '../NotFound';
import { Route } from './node_modules/react-router-dom';
import './index.css';
import Booklist from '../booklist/Booklist';


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
    
          <main>
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
          </main>
            <Footer />
        </div>
      );
  }
}

export default App;

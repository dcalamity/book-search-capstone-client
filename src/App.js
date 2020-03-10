import React, { Component } from 'react';
import Signup from './Signup';
import Footer from './Footer'
import LogIn from './LogIn';
import Dashboard from './Dashboard';
import Createcollection from './Createcollection';
import Bookinfo from './Bookinfo';
import Addbook from './Addbook';
import './index.css';


class App extends Component {
  constructor(props) {
      super(props);
      this.state = { };
  }

  componentDidMount() {
      console.log('Stateful component successfully mounted.');
  }

  render() {
      // const { name } = this.props;
      // const { isLiked } = this.state;

      return (
        <div>
          {/* Stateful */}
          <Signup/>
           {/* Stateful */}
          <LogIn/>
          <Dashboard/>
           {/* Stateful */}
          <Createcollection/>
           {/* Stateful */}
          <Bookinfo/>
           {/* Stateful */}
          <Addbook/>
          <Footer/>
        </div>
      );
  }
}

export default App;

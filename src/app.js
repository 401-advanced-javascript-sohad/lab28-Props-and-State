/* eslint-disable no-unused-vars */
import React from 'react';
import './app.scss';
import Header from './components/header/header.js';
import Footer from './components/footer/footer.js';

class App extends React.Component{
  constructor (props){
    super(props);
    this.state = {};
  }
  
  }
  render(){
    return(
      <React.Fragment>
        <Header />
        <Footer />
      </React.Fragment>
    );
  }
};

export default App;
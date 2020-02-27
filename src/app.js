/* eslint-disable no-unused-vars */
import React from 'react';
import './app.scss';
import Header from './component/header/header.js';
import Footer from './component/footer/footer.js';

class App extends React.Component{
  render(){
    return(
      <React.Fragment>
        <Header />
        <Form />
        <Results />
        <Footer />
      </React.Fragment>
    );
  }
}
export default App;
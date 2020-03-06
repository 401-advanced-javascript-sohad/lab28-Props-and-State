/* eslint-disable no-unused-vars */
import React from 'react';
import Form from '../src/components/main/form.js';
import Results from '../src/components/main/result.js';
import Header from '../src/components/header/header.js';
import Footer from '../src/components/footer/footer.js';
import './app.scss';



class App extends React.Component{
  constructor (props){
    super(props);
    this.state = {};
  }






  
  updateState = data =>{
    let Headers = {'Content-Type': 'application/json'};
    this.setState({Headers, Response:{data}});
  }






  render(){
    return(
      <React.Fragment>
        <Header />
        <Form update={this.updateState}/>
        <Results  response={this.state}/>
        <Footer />
      </React.Fragment>
    );
  }
}
export default App;
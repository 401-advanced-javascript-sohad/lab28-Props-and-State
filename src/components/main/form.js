/* eslint-disable no-undef */

import React from 'react';

class Form extends React.Component{
  constructor(props){
    super(props);
    this.state = {url:'',method: 'get',header: {},body: {}};
  }



   handelClick = async e =>{
     e.preventDefault();
     let raw = await fetch(this.state.url);
     let APIdata = await raw.json();
     this.props.update(APIdata);
   };



   callingAPI = e =>{
     let url = e.target.value;
     this.setState({url});
   };




   render(){
     return(
       <form onSubmit={this.handelClick}>
         <input id="input1" type='text' className="useInput" name='url' placeholder='Type the URL  for the API' onChange={this.callingAPI} /><br/>
        
         <button id="b1" name='GET'  required > GET</button>
         <button id="b1" name='POST'> POST</button>
         <button id="b1"tname='PUT'> PUT</button>
         <button id="b1" className="PATCH"> PATCH</button>
         <button id="b1" name='DELETE'> DELETE</button>
       
         <button id="go" type='submit'>Gooo!</button>
       </form>
     );
   }
}


export default Form;

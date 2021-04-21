import React, { Component } from 'react';
import './Form.css';

class Form extends Component{

constructor(props){
 super(props);

 this.state = {  name: "Rashmi Ghogare",
      address: "Bavdhan Stargaze A-1004",
      Gender: "",
      Mobile: "9822600911",
      Message:"hello"


  }
}

// handlename = (event) => {
  
//   this.setState({ fullname: event.target.value })
// }

// handleemail = (event) => {
  
//   this.setState({ email: event.target.value })
// }

// handlenumber = (event) => {
  
//   this.setState({ number: event.target.value })
// }

// handlemessage = (event) => {
  
//   this.setState({ message: event.target.value })
// }

handlechangeall = (event) =>{
 this.setState ( { [event.target.name] :event.target.value  } )
}

handlesubmit = (event) => {
 alert (`my name is ${this.state.fullname}. 
  My address id is ${this.state. address}
  My Gender id is female ${this.state. Gender}
  My mobile number is ${this.state.phone}.
  My message to your company is ${this.state.message}
  `);
 // alert( JSON.stringify(this.state));
 console.log( JSON.stringify(this.state));
 event.preventDefault();
}

render(){
 return(
  <div>
   <form onSubmit = {this.handlesubmit} >

    <label> fullname </label>
    <input  type="text" name="fullname"  value={this.state.fullname}  
      onChange={this.handlechangeall} /> <br/>


      <label for="address">Address [alphanumeric characters] :</label>
      <input type="text" name="address" size="50" onblur="alphanumeric()"/>

      <br/>

      <label id="gender">Gender:</label>
      <input type="radio" name="sex" value="Male" checked /><span>Male</span>
      <input type="radio" name="sex" value="Female" /><span>Female</span><br/>


    <label> Mobile </label><br/>
    <input  type="number" name="phone" value= {this.state.phone} 
            onChange={this.handlechangeall} /> <br/>

    <label> Message </label>
    <textarea  value= {this.state.message}  name="message"
            onChange={this.handlechangeall} />   <br/>

    <input type="submit" value="Send" />
   </form>
  </div>
 )
}

}

export default Form;
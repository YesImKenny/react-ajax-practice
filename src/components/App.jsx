
// var React = require('react');
// var ReactDOM = require('react-dom');
//es6 instantiation
import React from 'react';
import $ from 'jquery'

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {'name': '',
                 'message': ''};

    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangeMessage = this.handleChangeMessage.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChangeName(event) {
    this.setState({name: event.target.value});
  }
  
  handleChangeMessage(event) {
    this.setState({message: event.target.value});
  }

  handleSubmit(event) {
  	// console.log('This is the State', this.state);
  	event.preventDefault();

  	$.ajax({
      type: "POST",
      url: 'http://ec2-13-57-25-101.us-west-1.compute.amazonaws.com:3000/api/hrsf110/greeting',
      data: JSON.stringify(this.state),
      contentType: 'application/json', 
      success: function(data){ 
      	 $('.container').text(data);
      	},
      error: function(data) {
      	console.log('ERROR', data);
      },
      
    });
  	// runAjax(function(output) {
   //    console.log(output);
  	// });
    
    // alert('A name & message was submitted: ' + this.state.name + ': ' + this.state.message);
    // event.preventDefault();
  }

  // function runAjax(handleData) {
  //   $.ajax({
  //     type: "POST",
  //     url: 'http://ec2-13-57-25-101.us-west-1.compute.amazonaws.com:3000/api/hrsf110/greeting',
  //     data: JSON.stringify(this.state),
  //     success: function(data){ 
  //     	 handleData(data);
  //     	},
  //     dataType: 'json' 
  //   });
  // }

  render() {
    return (
     <div>
      <h1>Server Response:</h1>
      <h1 className = 'container'>Response Goes Here!</h1>

     <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" value={this.state.name} onChange={this.handleChangeName} />
          Message:
          <input type="text" value={this.state.message} onChange={this.handleChangeMessage} />
        </label>
        <input type="submit" value="Send Message" />
      </form>
     </div>
    );
  }
}



//export for use in index.js file
export default App;
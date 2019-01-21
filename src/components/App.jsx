
//es6 instantiation
var React = require('react');
// var ReactDOM = require('react-dom');
class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }
  render() {
    return <h1>It's Working! {this.props.name}</h1>;
  }
}



//export for use in index.js file
export default App;
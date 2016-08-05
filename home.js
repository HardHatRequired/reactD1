import React from 'react';

class Home extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      hello:"sup Yo Dawg",
      arry:["this", "is", "an", "array"]
    }

    this.state.myFunction = function() {
      altert('this is fun');
    }

  }
  render() {return (
    <div>
      <button onClick={this.state.myFunction}>Click Me</button>
      {this.props.passedin}
      {this.state.arry.map(displayItem)}
    </div>
  )}
}

function displayItem(item){
  return (
    <div>
      This is a repeated thing: {item}
    </div>
  )
}

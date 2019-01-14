/* 
Convert The below Jquery Sample To React Component.

$("#menu-toggle").click(function(e) {
 e.preventDefault();
 $("#wrapper").toggleClass("toggled");
});

*/



import React, { Component } from 'react';

class Test extends Component {
  constructor(){
    super();
    this.state = {
      toggle: false
    }
  }
  testClick(e) {
    e.preventDefault();
    let isToggled = this.state.toggle;
    this.setState({
      toggle: !isToggled
    });
  }

  render(){
    let buttonClass = this.state.toggle ? 'toggled' : '';
    return(
      <div id="wrapper" className={buttonClass}>
        <button id="menu-toggle" onClick={this.testClick}>Test onClick</button>
      </div>
    )
  }
}

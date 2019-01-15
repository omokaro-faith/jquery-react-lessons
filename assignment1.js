/* 
Convert The below Jquery Sample To React Component.

 $(document).ready(function () {
    $('#testButton').click(function () {
      alert("Clicked the button!");
    });
  });
*/



import React, { Component } from 'react';

class Assignment1 extends Component {
  constructor() {
    super();
  }

  clicked() {
    alert("Clicked the button!");
  }
  render() {
    return (
      <button id="testButton" onClick={this.clicked}> Click </button>
    )
  }
}

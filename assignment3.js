/* 
Convert The below Jquery Sample To React Component.

 $('#json').click(function(){ 
    alert('json');
      $.getJSON("https://jsonplaceholder.typicode.com/users",
      function(data) {
      alert(data);         
    });   
  })
*/


import React, { Component } from 'react';

class Test extends Component {
  constructor() {
    super();
  }

  getJson() {
    alert('json');
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => {
      alert(response.data);
    });
  }
  render() {
    return (
      <button id="json" onClick={this.getJson}> Click </button>
    )
  }
}

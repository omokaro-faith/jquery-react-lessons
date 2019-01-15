/* 
Convert The below Jquery Sample To React Component.

 $(document).ready(function(){
  $("button").click(function(){
    $("p").hide();
  });
});
*/



import React, { Component, Fragment } from 'react';

class Assignment2 extends Component {
  constructor() {
    super();
    this.state = {
      showParagraph = true;
    }
  }

  clicked() {
    this.setState({
      showParagraph: false;
    });
  }
  render() {
    const { hideParagraph } = this.state;
    return (
      <Fragment>
        <button onClick={this.clicked}> Click </button>
        { showParagraph && 
          <p> This is a paragraph </p>
        }
      </Fragment>
    )
  }
}

/* 
Convert The below Jquery Sample To React Component.

 $(".tab-list").on("click", ".tab", function(e) {
    e.preventDefault();

    $(".tab").removeClass("active");
    $(".tab-content").removeClass("show");
    $(this).addClass("active"); // I becasme lost here.
    $($(this).attr("href")).addClass("show");
  });
*/


import React, { Component, Fragment } from 'react';

class Assignment4 extends Component {
  constructor() {
    super();
    this.state ={
      active: true,
      show: true,
    }
  }

  handleClick(e) {
    e.preventDefault();

    this.setState({
      active: false,
      show: false,
    });
  }
  render() {
    let activeClass = this.state.active ? "active" : "";
    let showContent = this.state.show ? "show" : "";
    return (
      <Fragment>
        <div className="tabs">
          <a className="tab-list" href="#" onClick={this.handleClick}> tab1 </a>
          <a className="tab-list" href="#" onClick={this.handleClick}> tab2 </a>
          <a className="tab-list" href="#" onClick={this.handleClick}> tab3 </a>
        </div>
        <div className={`tab ${activeClass}`}>
          <h2 className={`tab-content ${showContent}`}> First Tab</h2>
        </div>
        <div className={`tab ${activeClass}`}>
          <h2 className={`tab-content ${showContent}`}> Second Tab</h2>
        </div>
        <div className={`tab ${activeClass}`}>
          <h2 className={`tab-content ${showContent}`}> Third Tab</h2>
        </div>
      </Fragment>
    )
  }
}

import React, { Component } from "react";
import { observable, action } from "mobx";
import { observer } from "mobx-react";

@observer
class HelloWorld extends React.Component {
  render() {


    setTimeout(() => {
      this.props.store.setText("Hello Mobx");
    }, 2000);


    return (
      <div className="col-md-12">
        <div className="jumbotron">
          {this.props.store.text} <br />
          Text Length: {this.props.store.textLength}
        </div>
      </div>
    );
  }
}

export default HelloWorld;

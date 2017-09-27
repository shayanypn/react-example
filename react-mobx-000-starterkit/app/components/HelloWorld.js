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
      <div>
        {this.props.store.text} <br />
        Text Length: {this.props.store.textLength}
      </div>
    );
  }
}

export default HelloWorld;

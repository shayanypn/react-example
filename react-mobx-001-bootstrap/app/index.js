import React from "react";
import { render } from "react-dom";

import HelloWorld from "./components/HelloWorld";
import Model from "./models/Model";

import './styles/app.scss';


const store = new Model();

render(
  <div className="container">
    <HelloWorld store={store} />
  </div>,
  document.getElementById("root")
);

store.setText("Hello World");

// playing around in the console
window.store = store;

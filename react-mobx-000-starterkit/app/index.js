import React from "react";
import { render } from "react-dom";

import HelloWorld from "./components/HelloWorld";
import Model from "./models/Model";

const store = new Model();

render(
  <div>
    <HelloWorld store={store} />
  </div>,
  document.getElementById("root")
);

store.setText("Hello World");

// playing around in the console
window.store = store;

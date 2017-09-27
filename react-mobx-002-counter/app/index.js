import React from "react";
import { render } from "react-dom";

import Counter from "./components/Counter";
import CounterModel from "./models/Counter";

import './styles/app.scss';





const store = new CounterModel();

render(
	<div className="container">
		<Counter store={store} />
	</div>,
	document.getElementById("root")
);

// playing around in the console
window.store = store;

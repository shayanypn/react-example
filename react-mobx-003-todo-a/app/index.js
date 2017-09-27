import React from "react";
import { render } from "react-dom";


import Container from "./components/Container";
import TodosModel from "./models/Todos";


import './styles/app.scss';





render(
	<div className="container">
		<Container store={TodosModel} />
	</div>,
	document.getElementById("root")
);


// playing around in the console
window.store = TodosModel;

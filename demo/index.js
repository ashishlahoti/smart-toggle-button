import { html, render } from "lit-html";
import "../dist/smart-toggle-button.js";

const title = "test";
const items = [{name: "Left", value: "LEFT"}, {name: "Right", value: "RIGHT"}]
render(
	html`
		<style>
			smart-toggle-button {
				width: 300px;
			}
		</style>
		<h3>Smart Toggle Button</h3>
    <smart-toggle-button .items=${items}></smart-toggle-button>
    <smart-toggle-button checked></smart-toggle-button>
	`,
	document.querySelector("#demo")
);

import React from "react";
import ReactDOM from "react-dom";

// can name "App" anything but React convention is to name the component
// the same name as the file, both capitalized
import App from "./components/App.js";

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

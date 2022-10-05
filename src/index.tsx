import React from "react";
import ReactDOM from "react-dom/client";
import "./style.scss";
// import App from "./App";
// import UseCaseMultipleStates from "./case";
import Simple from "./simple";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(<Simple />);

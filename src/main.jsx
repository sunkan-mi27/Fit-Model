import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";
// import "./index.css";
import "./styles/global.css";
import "./styles/theme.css";
import App from "./App";
import "react-calendar/dist/Calendar.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>,
);

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { CounterContextProvider } from "./context/CounterContext.jsx";
//1 import { UserContextProvider } from "./context/UserContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/*1 <UserContextProvider> */}
    <CounterContextProvider>
      <App />
    </CounterContextProvider>
    {/*1 </UserContextProvider> */}
  </React.StrictMode>
);

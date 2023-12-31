import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

import App from "./App";
import Name from "./components/Name";
import Parent from "./components/ContainerSample";
import Counter from "./components/Counter";
import Page from "./components/ContextSample";
import Counter2 from "./components/ReducerSample";
import { UsemomoSample } from "./components/UseMemoSample";
import { Clock } from "./components/Clock";
import ImageUploadApp from "./components/useRef";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
    <Name />
    <Parent />
    <Counter initialValue={0} />
    <Counter2 initialValue={0} />
    <Page />
    <UsemomoSample />
    <Clock />
    <ImageUploadApp />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

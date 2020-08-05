import React from "react";
import ReactDOM from "react-dom";

import App from "./components/App";
import { TweetProvider } from "./TweetContext";

const rootElement = document.getElementById("root");

ReactDOM.render(
  <TweetProvider>
    <App />
  </TweetProvider>,
  rootElement
);

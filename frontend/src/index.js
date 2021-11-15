import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { ShowContextProvider } from "./Context/Login.Register";
import { Provider } from "react-redux";
import { store } from "./Components/Redux/store";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ShowContextProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ShowContextProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

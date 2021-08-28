import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/lib/integration/react";
import { Application } from "./Application";
import { persistor, store } from "./reduxToolKit-Saga/store";
import "./sass/index.scss";

ReactDOM.render(
  <React.StrictMode>
    <PersistGate loading={null} persistor={persistor}>
      <Provider store={store}>
        <Application />
      </Provider>
    </PersistGate>
  </React.StrictMode>,
  document.getElementById("root")
);

import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
import store from "./store/store";
import { Provider } from "react-redux";
import IRouter from './router/IRouter'

ReactDOM.render(
    <Provider store={store}>
      <IRouter />
    </Provider>,
  document.getElementById("root")
);
serviceWorker.unregister();

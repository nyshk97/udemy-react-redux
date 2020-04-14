import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from 'redux-thunk'

import "./index.css";
import reducer from "./reducers";
import EventsIndex from "./components/events_index";
import * as serviceWorker from "./serviceWorker";

const store = createStore(reducer, applyMiddleware(thunk));

ReactDOM.render(
  // <React.StrictMode>
    <Provider store={store}>
      <EventsIndex />
    </Provider>,
  // </React.StrictMode>,
  document.getElementById("root")
);
serviceWorker.unregister();

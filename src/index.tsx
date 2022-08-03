import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter} from "react-router-dom";
import "./index.scss";

import App from "./App";
import {Provider} from "react-redux";
import {store} from "./store";

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);

root.render(
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter basename="/github-search">
                <App />
            </BrowserRouter>
        </Provider>
    </React.StrictMode>
);
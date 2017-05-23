'use strict';

import React from "react";
import {render} from "react-dom";

import {Provider} from "react-redux";

import "ag-grid-root/dist/styles/ag-grid.css";
import "ag-grid-root/dist/styles/theme-fresh.css";
// import "ag-grid-root/dist/styles/theme-blue.css";

import StoreService from './services/StoreService';
import TraderDashboard from "./components/TraderDashboard.jsx";

let store = StoreService.STORE;

document.addEventListener('DOMContentLoaded', () => {
    render(
        <Provider store={store}>
            <TraderDashboard />
        </Provider>,
        document.querySelector('#traderDashboard')
    );
});


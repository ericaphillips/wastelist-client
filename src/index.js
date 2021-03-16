import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router } from "react-router-dom"
import { WasteList } from "./components/WasteList.js"

ReactDOM.render(
  <React.StrictMode>
    <Router>
    <WasteList />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);



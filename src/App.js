import React from "react";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
return (
  <Router>
  <div className="app">
     <Routes>
        <Route path="/checkout">
          <Header />
          <Checkout />
          </Route>
          <Route path="/">
            <Header />
          <Home />
        </Route>
      </Routes>
    </div>
    </Router>
);
}
export default App;